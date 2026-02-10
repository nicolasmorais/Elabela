import { HeaderAP } from "@/components/advertorial-ap/HeaderAP";
import { ContentAP } from "@/components/advertorial-ap/ContentAP";
import { PricingAP } from "@/components/advertorial-ap/PricingAP";
import { GuaranteeAP } from "@/components/advertorial-ap/GuaranteeAP";
import { FooterAP } from "@/components/advertorial-ap/FooterAP";
import { getDb } from '@/lib/database';
import type { Metadata } from "next";
import { PixelInjector } from '@/components/tracking/PixelInjector';
import { PageTracker } from "./PageTracker";
import { ApprovalPageContent } from '@/lib/advertorial-types';

async function fetchApprovalPageContent(client: any): Promise<ApprovalPageContent> {
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['approvalPageContent']);
    if (result.rows.length === 0) {
        throw new Error("Approval page content not found in settings.");
    }
    return JSON.parse(result.rows[0].value) as ApprovalPageContent;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = await getDb();
  const content = await fetchApprovalPageContent(client);
  return {
    title: content.header.title || "Página de Aprovação",
  };
}

export default async function APPage() {
  const client = await getDb();
  const content: ApprovalPageContent = await fetchApprovalPageContent(client);

  const { guaranteeText, ...contentBodyProps } = content.body;
  const pixelScripts = await PixelInjector({ pagePixels: content.pixels });

  return (
    <>
      <PageTracker contentId="ap" />
      {pixelScripts && <div dangerouslySetInnerHTML={{ __html: pixelScripts.toString() }} className="hidden" />}
      <div className="bg-white text-gray-800 font-merriweather">
        <div className="bg-gray-100 text-center py-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">
            Advertorial
          </p>
        </div>
        <HeaderAP {...content.header} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-4">
          <ContentAP {...contentBodyProps} />
          <PricingAP {...content.pricing} />
          <GuaranteeAP guaranteeText={guaranteeText} />
        </main>
        <FooterAP {...content.footer} />
      </div>
    </>
  );
}
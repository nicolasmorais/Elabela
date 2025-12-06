"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Trash2 } from 'lucide-react';

interface ApprovalPageContent {
  header: { preTitle: string; title: string; };
  content: { intro: string; pillarsTitle: string; pillars: string[]; outro: string; };
  footer: { disclaimer: string; copyright: string; };
}

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader><Skeleton className="h-6 w-1/4" /></CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader><Skeleton className="h-6 w-1/4" /></CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  </div>
);

export default function ApprovalPageEditor() {
  const [content, setContent] = useState<ApprovalPageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/approval-page')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load page content.");
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (section: keyof ApprovalPageContent, field: string, value: string) => {
    setContent(prev => {
      if (!prev) return null;
      return { ...prev, [section]: { ...prev[section], [field]: value } };
    });
  };

  const handlePillarChange = (index: number, value: string) => {
    setContent(prev => {
      if (!prev) return null;
      const newPillars = [...prev.content.pillars];
      newPillars[index] = value;
      return { ...prev, content: { ...prev.content, pillars: newPillars } };
    });
  };

  const addPillar = () => {
    setContent(prev => {
      if (!prev) return null;
      return { ...prev, content: { ...prev.content, pillars: [...prev.content.pillars, "New Pillar"] } };
    });
  };

  const removePillar = (index: number) => {
    setContent(prev => {
      if (!prev) return null;
      const newPillars = prev.content.pillars.filter((_, i) => i !== index);
      return { ...prev, content: { ...prev.content, pillars: newPillars } };
    });
  };

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    try {
      const response = await fetch('/api/approval-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (!response.ok) throw new Error('Failed to save');
      toast.success("Content saved successfully!");
    } catch (error) {
      toast.error("Failed to save content.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <LoadingSkeleton />;
  if (!content) return <p>Could not load content. Please try refreshing.</p>;

  return (
    <>
      <Toaster richColors />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Approval Page Editor</h1>
            <p className="text-muted-foreground">Modify the content displayed on the approval page.</p>
          </div>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <Card>
          <CardHeader><CardTitle>Header</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Pre-Title</Label>
              <Input value={content.header.preTitle} onChange={e => handleInputChange('header', 'preTitle', e.target.value)} />
            </div>
            <div>
              <Label>Main Title</Label>
              <Input value={content.header.title} onChange={e => handleInputChange('header', 'title', e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Main Content</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Intro Paragraph</Label>
              <Textarea value={content.content.intro} onChange={e => handleInputChange('content', 'intro', e.target.value)} rows={3} />
            </div>
            <div>
              <Label>Pillars Section Title</Label>
              <Input value={content.content.pillarsTitle} onChange={e => handleInputChange('content', 'pillarsTitle', e.target.value)} />
            </div>
            <div>
              <Label>Pillars</Label>
              <div className="space-y-2">
                {content.content.pillars.map((pillar, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input value={pillar} onChange={e => handlePillarChange(index, e.target.value)} />
                    <Button variant="ghost" size="icon" onClick={() => removePillar(index)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={addPillar} className="mt-2">Add Pillar</Button>
            </div>
            <div>
              <Label>Outro Paragraph</Label>
              <Textarea value={content.content.outro} onChange={e => handleInputChange('content', 'outro', e.target.value)} rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Footer</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Disclaimer</Label>
              <Input value={content.footer.disclaimer} onChange={e => handleInputChange('footer', 'disclaimer', e.target.value)} />
            </div>
            <div>
              <Label>Copyright</Label>
              <Input value={content.footer.copyright} onChange={e => handleInputChange('footer', 'copyright', e.target.value)} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
             <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
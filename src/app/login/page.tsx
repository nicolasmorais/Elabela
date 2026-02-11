import { LoginFormOffline } from '@/components/auth/LoginFormOffline';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Logo } from '@/components/ui/Logo';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Login - Elabela | Control Pages',
  description: 'Acesse o painel de gerenciamento de advertoriais',
};

export default function LoginPage() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020617]">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#0061FF]/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="flex flex-col items-center text-center">
            <div className="animate-in fade-in slide-in-from-top-4 duration-1000 -mb-4"><Logo /></div>
            <div className="w-full bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Página de Acesso</h1>
                    <p className="text-slate-500 text-sm mt-2 font-medium">Insira sua senha mestra</p>
                </div>
                <LoginFormOffline />
                <div className="mt-8 pt-6 border-t text-center"><p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Elabela | Control Pages • v2.0</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
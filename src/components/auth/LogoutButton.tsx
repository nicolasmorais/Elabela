"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { toast } from 'sonner';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (response.ok) {
        toast.info("Sessão encerrada.");
        router.push('/login');
      } else {
        throw new Error('Falha no logout');
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      toast.error('Não foi possível sair. Tente novamente.');
    }
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline" 
      className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800 border-red-500 dark:border-red-700"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sair
    </Button>
  );
}
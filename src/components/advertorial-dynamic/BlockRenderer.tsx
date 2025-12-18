"use client";

import { ContentBlock } from '@/lib/advertorial-types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react'; // Importando hooks do React

interface BlockRendererProps {
  block: ContentBlock;
}

// ... (o resto do código do arquivo permanece o mesmo)
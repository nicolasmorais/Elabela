import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Heart, 
  Sparkles, 
  Award,
  Truck,
  Verified,
  ShieldAlert,
  ShoppingBag,
  DollarSign,
  Home
} from 'lucide-react';

export interface SalesPage {
  id: string;
  name: string;
  slug: string;
  priceCard: string;
  pricePix: string;
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
  backRedirectUrl?: string; // Novo campo para o Black Redirect
  description?: string;
  updatedAt: string;
}

// ... restante do arquivo mantido
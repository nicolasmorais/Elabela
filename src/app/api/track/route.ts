import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { PageViewEvent } from '@/lib/advertorial-types';
import { v4 as uuidv4 } from 'uuid';

// Função para buscar a localização baseada no IP
async function getGeoLocation(ip: string | null): Promise<{ country?: string, regionName?: string }> {
    if (!ip || ip === '::1' || ip === '127.0.0.1') {
        // IP local ou não disponível, retorna dados de teste
        return { country: 'Brasil', regionName: 'SP' };
    }
    
    const apiKey = process.env.IPGEOLOCATION_API_KEY;
    const apiUrl = 'https://api.ipgeolocation.io/ipgeo';

    if (!apiKey) {
        console.warn("IPGEOLOCATION_API_KEY not set. Skipping GeoIP lookup.");
        return {};
    }

    try {
        // ipgeolocation.io usa o parâmetro 'ip' e 'apiKey'
        const url = `${apiUrl}?apiKey=${apiKey}&ip=${ip}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // Adicionando timeout para evitar bloqueio
            signal: AbortSignal.timeout(1000), 
        });

        if (!response.ok) {
            console.error(`GeoIP API returned status ${response.status}`);
            return {};
        }

        const data = await response.json();
        
        // ipgeolocation.io retorna 'country_name' e 'state_prov' (estado/região)
        if (data.country_name) {
            return {
                country: data.country_name || 'Desconhecido',
                regionName: data.state_prov || 'Desconhecido', // Nome do estado/região
            };
        }
        return {};
    } catch (error) {
        console.error('GeoIP lookup failed:', error);
        return {};
    }
}

export async function POST(req: Request) {
  try {
    const { contentId, path } = await req.json();
    
    if (!contentId || !path) {
      return NextResponse.json({ message: 'contentId e path são obrigatórios' }, { status: 400 });
    }

    // 1. Obter o IP do cliente
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : null;
    
    // 2. Obter a localização
    const location = await getGeoLocation(clientIp);

    const db = await getDb();
    
    const newEvent: PageViewEvent = {
      id: uuidv4(),
      contentId,
      path,
      timestamp: new Date().toISOString(),
      country: location.country,
      regionName: location.regionName,
    };

    db.data.pageViews.push(newEvent);
    await db.write();

    return NextResponse.json({ success: true, message: 'Evento registrado' }, { status: 201 });
  } catch (error) {
    console.error('Failed to track page view:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

type Cam = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
};

// Coordenadas aproximadas de los núcleos urbanos
const cams: Cam[] = [
  { slug: 'silos', name: 'Santo Domingo de Silos', lat: 41.9632, lng: -3.4168 },
  { slug: 'rabanera-del-pinar', name: 'Rabanera del Pinar', lat: 41.8783, lng: -3.2243 },
  { slug: 'pineda-de-la-sierra', name: 'Pineda de la Sierra', lat: 42.2377, lng: -3.3073 },
  { slug: 'huerta-de-arriba', name: 'Huerta de Arriba', lat: 42.0973, lng: -3.0539 },
];

export default function MapCamaras() {
  const mapProps: any = { center: [42.15, -3.35], zoom: 9 };
  return (
    <div className="w-full h-[480px] rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700">
      <MapContainer {...mapProps} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cams.map((c) => (
          <CircleMarker key={c.slug} {...({ center: [c.lat, c.lng], radius: 10, pathOptions: { color: '#0ea5e9', fillColor: '#0ea5e9', fillOpacity: 0.85 } } as any)}>
            <Popup>
              <div className="space-y-1">
                <div className="font-semibold">{c.name}</div>
                <Link href={`/streaming/${c.slug}`} className="text-accent hover:underline">Ver cámara</Link>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

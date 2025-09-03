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

const cams: Cam[] = [
  { slug: 'silos', name: 'Santo Domingo de Silos', lat: 41.9626, lng: -3.4169 },
  { slug: 'rabanera-del-pinar', name: 'Rabanera del Pinar', lat: 41.877, lng: -3.224 },
  { slug: 'pineda-de-la-sierra', name: 'Pineda de la Sierra', lat: 42.236, lng: -3.306 },
  { slug: 'huerta-de-arriba', name: 'Huerta de Arriba', lat: 42.100, lng: -3.100 },
];

export default function MapCamaras() {
  return (
    <div className="w-full h-[480px] rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700">
      <MapContainer center={[42.25, -3.45]} zoom={9} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cams.map((c) => (
          <CircleMarker key={c.slug} center={[c.lat, c.lng]} radius={10} pathOptions={{ color: '#0ea5e9', fillColor: '#0ea5e9', fillOpacity: 0.8 }}>
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


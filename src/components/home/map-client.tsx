"use client"

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import type { LocationType } from '@/hooks/use-map'

function MapBoundsAdjuster({ locations }: { locations: LocationType[] }) {
  const map = useMap()

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((loc: LocationType) => [loc.lat, loc.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [map, locations])

  return null
}

interface MapClientProps {
  locations?: LocationType[]
  height?: string
  className?: string
  showControls?: boolean
}

export default function MapClient({
  locations = [],
  height = '400px',
  className = '',
  showControls = true,
}: MapClientProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
        iconUrl: 'leaflet/dist/images/marker-icon.png',
        shadowUrl: 'leaflet/dist/images/marker-shadow.png',
      })
    }
  }, [])

  if (!isClient) {
    return (
      <div
        className={`bg-gray-200 animate-pulse rounded-lg flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="text-gray-500">Carregando mapa...</div>
      </div>
    )
  }

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        zoomControl={showControls}
        attributionControl={showControls}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBoundsAdjuster locations={locations} />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]} />
        ))}
      </MapContainer>
    </div>
  )
}
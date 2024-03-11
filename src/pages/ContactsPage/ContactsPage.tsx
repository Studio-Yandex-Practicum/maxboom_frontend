import L from 'leaflet'
import type { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Heading from '@/shared/ui/Heading/Heading'

import styles from './ContactsPage.module.scss'

import 'leaflet/dist/leaflet.css'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const ContactsPage: FC = () => {
  const position: [number, number] = [54.71864, 20.499043]

  return (
    <div className={styles.contacts}>
      <Heading className={styles.heading}>Контакты</Heading>
      <MapContainer
        attributionControl={false}
        center={position}
        zoom={17}
        style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Гвардейский проспект, 3, Калининград</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default ContactsPage

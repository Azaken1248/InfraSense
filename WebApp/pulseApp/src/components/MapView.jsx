import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const VIT_CHENNAI_COORDS = [12.8406, 80.1533];

const MapView = ({ latitude, longitude }) => (
  <MapContainer
    center={VIT_CHENNAI_COORDS}
    zoom={13}
    style={{ height: '300px', width: '100%', borderRadius: '15px' }}
  >
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    
    {/* VIT Chennai Fixed Marker */}
    <Marker position={VIT_CHENNAI_COORDS}>
      <Popup>
        VIT Chennai Campus<br />
        (12.8406, 80.1533)
      </Popup>
    </Marker>

    {/* Received Coordinates Visualization */}
    <Circle 
      center={[latitude, longitude]} 
      radius={500} 
      color="cyan" 
      fillColor="cyan" 
      fillOpacity={0.3}
    />
    <Marker position={[latitude, longitude]}>
      <Popup>
        Received Coordinates:<br />
        {latitude.toFixed(4)}, {longitude.toFixed(4)}
      </Popup>
    </Marker>
  </MapContainer>
);

export default MapView;

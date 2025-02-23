import leaflet, { type LatLngExpression, type Map as llMap } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";
import type React from "react";
import { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import CityOption from "./CityOption";
import StationRoulette from "./StationRoulette";
import { SettingsIcon } from "./icons";
import { getNumberFromLocalStorage, setNumberToLocalStorage } from "./storage";

const DefaultIcon = leaflet.icon({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
  iconAnchor: [12, 41], // アイコンのとがった位置をクリックした場所に合わせるためのオフセット
  popupAnchor: [0, -32], // ポップアップの位置も合わせて調整
});
leaflet.Marker.prototype.options.icon = DefaultIcon;

type Props = {
  map: React.RefObject<llMap>;
  cityOption: number;
  setMarkerPosition: (markerPosition: LatLngExpression) => void;
};
const DisplayPosition: React.FC<Props> = ({
  map,
  cityOption,
  setMarkerPosition,
}) => {
  const setStation = (station: Station) => {
    setMarkerPosition([station.lat, station.lon]);
    map.current?.setView([station.lat, station.lon], 13, {
      animate: true,
    });
  };

  return <StationRoulette cityOption={cityOption} setStation={setStation} />;
};

function App() {
  // wtama(4), stama(3), ntama(2), w23(1), e23(0)
  const [cityOption, setCityOption] = useState<number>(
    getNumberFromLocalStorage("cityOption", 0b11111),
  );
  const [markerPosition, setMarkerPosition] = useState<LatLngExpression>([
    35.6815252972399, 139.76698937040683,
  ]);
  const map = useRef<llMap>(null);

  const toggleCityOption = (bit: number) => {
    const nextCityOption = cityOption ^ (1 << bit);
    setCityOption(nextCityOption);
    setNumberToLocalStorage("cityOption", nextCityOption);
  };

  const handleClickSettings = () => {
    (document.getElementById("setting_modal") as HTMLDialogElement).showModal();
  };

  return (
    <div className="mx-auto p-4 max-w-xl flex flex-col gap-4 relative h-svh">
      {/* Header */}
      <div className="navbar shadow-sm">
        <div className="flex-1 text-2xl font-bold pl-2">
          東京都 駅ルーレット
        </div>
        <div className="flex-none">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={handleClickSettings}
          >
            <SettingsIcon size={24} className="fill-base-content" />
            設定
          </button>
        </div>
        <dialog id="setting_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button
                type="submit"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <CityOption
              cityOption={cityOption}
              toggleCityOption={toggleCityOption}
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button type="submit">close</button>
          </form>
        </dialog>
      </div>
      {/* Map */}
      <MapContainer
        center={[35.6815252972399, 139.76698937040683]}
        zoom={13}
        scrollWheelZoom={false}
        ref={map}
        className="w-full h-0 grow"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
        />
        <Marker position={markerPosition} />
      </MapContainer>
      {/* Roulette */}
      <DisplayPosition
        map={map as React.RefObject<llMap>}
        cityOption={cityOption}
        setMarkerPosition={setMarkerPosition}
      />
    </div>
  );
}

export default App;

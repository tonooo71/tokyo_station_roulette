import clsx from "clsx";
import { useEffect, useState } from "react";
import stations_json from "../public/stations.json";
import { getGoogleMapRouteUrl } from "./googlemap";

type Props = {
  cityOption: number;
  setStation: (station: Station) => void;
};
const StationRoulette: React.FC<Props> = ({
  cityOption,
  setStation: _setStation,
}) => {
  const [stations, setStations] = useState<Station[]>([]);
  const [station, setStation] = useState<Station>({
    name: "東京",
    address: "千代田区丸の内一丁目",
    lon: 139.766103,
    lat: 35.681391,
    area: "w23",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const wtama = ((1 << 4) & cityOption) === 1 << 4;
    const stama = ((1 << 3) & cityOption) === 1 << 3;
    const ntama = ((1 << 2) & cityOption) === 1 << 2;
    const w23 = ((1 << 1) & cityOption) === 1 << 1;
    const e23 = ((1 << 0) & cityOption) === 1 << 0;
    const filterFn = (s: Station): boolean => {
      switch (s.area) {
        case "w23":
          return w23;
        case "e23":
          return e23;
        case "ntama":
          return ntama;
        case "stama":
          return stama;
        case "wtama":
          return wtama;
        default:
          return false;
      }
    };
    const _stations = (stations_json as Station[]).filter(filterFn);
    setStations(_stations);
  }, [cityOption]);

  const handleRoulette = () => {
    setDisabled(true);
    const length = stations.length;
    let i = 0;
    const intervalId = setInterval(() => {
      const nextIndex = Math.ceil(Math.random() * length) - 1;
      setStation(stations[nextIndex]);
      i++;
      if (i === 5) {
        _setStation(stations[nextIndex]);
        setStation(stations[nextIndex]);
        clearInterval(intervalId);
        setDisabled(false);
      }
    }, 200);
  };

  return (
    <>
      <div className="card card-md shadow-sm w-full">
        <div className="card-body">
          <h2 className="card-title">{station.name}駅</h2>
          <p>{station.address}</p>
          <div className="card-actions justify-end">
            <a
              type="button"
              className={clsx("btn btn-accent", disabled && "btn-disabled")}
              href={getGoogleMapRouteUrl(station.name)}
            >
              現在地からのルートを確認
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-xl btn-primary"
        onClick={handleRoulette}
        disabled={disabled}
      >
        ルーレット
      </button>
    </>
  );
};

export default StationRoulette;

import clsx from "clsx";
import { useEffect, useState } from "react";
import stations_json from "../public/stations.json";
import { getGoogleMapRouteUrl } from "./googlemap";

type Props = {
  cityOption: number;
  setStation: (station: Station) => void;
};
const StationRoulette: React.FC<Props> = ({ cityOption, setStation }) => {
  const [stations, setStations] = useState<Station[]>([]);
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const nntama = ((1 << 5) & cityOption) === 1 << 5;
    const nstama = ((1 << 4) & cityOption) === 1 << 4;
    const nwtama = ((1 << 3) & cityOption) === 1 << 3;
    const stama = ((1 << 2) & cityOption) === 1 << 2;
    const wtama = ((1 << 1) & cityOption) === 1 << 1;
    const wards = ((1 << 0) & cityOption) === 1 << 0;
    const filterFn = (s: Station): boolean => {
      switch (s.area) {
        case "wards":
          return wards;
        case "nntama":
          return nntama;
        case "nstama":
          return nstama;
        case "nwtama":
          return nwtama;
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

  const stationName =
    stations.length === 0 || stations.length < index
      ? ""
      : stations[index].name;
  const stationAddress =
    stations.length === 0 || stations.length < index
      ? ""
      : stations[index].address;

  const handleRoulette = () => {
    setDisabled(true);
    const length = stations.length;
    let i = 0;
    const intervalId = setInterval(() => {
      const nextIndex = Math.ceil(Math.random() * length) - 1;
      setIndex(nextIndex);
      i++;
      if (i === 5) {
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
          <h2 className="card-title">{stationName}駅</h2>
          <p>{stationAddress}</p>
          <div className="card-actions justify-end">
            <a
              type="button"
              className={clsx("btn btn-accent", disabled && "btn-disabled")}
              href={getGoogleMapRouteUrl(stationName)}
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

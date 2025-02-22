import TokyoSvg from "./TokyoSvg";

type Props = {
  cityOption: number;
  toggleCityOption: (bit: number) => void;
};
const CityOption: React.FC<Props> = ({ cityOption, toggleCityOption }) => {
  const wtama = ((1 << 4) & cityOption) === 1 << 4;
  const stama = ((1 << 3) & cityOption) === 1 << 3;
  const ntama = ((1 << 2) & cityOption) === 1 << 2;
  const w23 = ((1 << 1) & cityOption) === 1 << 1;
  const e23 = ((1 << 0) & cityOption) === 1 << 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">対象市区町村</h2>
      <TokyoSvg cityOption={cityOption} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            id="cb_e23"
            type="checkbox"
            className="checkbox checkbox-lg"
            checked={e23}
            onChange={() => toggleCityOption(0)}
            disabled={cityOption === 1 << 0}
          />
          <label htmlFor="cb_e23" className="my-auto text-lg grow">
            23区東部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_w23"
            type="checkbox"
            className="checkbox checkbox-lg"
            checked={w23}
            onChange={() => toggleCityOption(1)}
            disabled={cityOption === 1 << 1}
          />
          <label htmlFor="cb_w23" className="my-auto text-lg grow">
            23区西部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_ntama"
            type="checkbox"
            className="checkbox checkbox-lg"
            checked={ntama}
            onChange={() => toggleCityOption(2)}
            disabled={cityOption === 1 << 2}
          />
          <label htmlFor="cb_ntama" className="my-auto text-lg grow">
            多摩北部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_stama"
            type="checkbox"
            className="checkbox checkbox-lg"
            checked={stama}
            onChange={() => toggleCityOption(3)}
            disabled={cityOption === 1 << 3}
          />
          <label htmlFor="cb_stama" className="my-auto text-lg grow">
            多摩南部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_wtama"
            type="checkbox"
            className="checkbox checkbox-lg"
            checked={wtama}
            onChange={() => toggleCityOption(4)}
            disabled={cityOption === 1 << 4}
          />
          <label htmlFor="cb_wtama" className="my-auto text-lg grow">
            多摩西部
          </label>
        </div>
      </div>
    </div>
  );
};

export default CityOption;

import TokyoSvg from "./TokyoSvg";

type Props = {
  cityOption: number;
  toggleCityOption: (bit: number) => void;
};
const CityOption: React.FC<Props> = ({ cityOption, toggleCityOption }) => {
  const nntama = ((1 << 5) & cityOption) === 1 << 5;
  const nstama = ((1 << 4) & cityOption) === 1 << 4;
  const nwtama = ((1 << 3) & cityOption) === 1 << 3;
  const stama = ((1 << 2) & cityOption) === 1 << 2;
  const wtama = ((1 << 1) & cityOption) === 1 << 1;
  const wards = ((1 << 0) & cityOption) === 1 << 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">対象市区町村</h2>
      <TokyoSvg cityOption={cityOption} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            id="cb_wards"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={wards}
            onChange={() => toggleCityOption(0)}
            disabled
          />
          <label htmlFor="cb_wards" className="my-auto text-xl">
            23区
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_nntama"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={nntama}
            onChange={() => toggleCityOption(5)}
          />
          <label htmlFor="cb_nntama" className="my-auto text-xl">
            北多摩北部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_nstama"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={nstama}
            onChange={() => toggleCityOption(4)}
          />
          <label htmlFor="cb_nstama" className="my-auto text-xl">
            北多摩南部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_nwtama"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={nwtama}
            onChange={() => toggleCityOption(3)}
          />
          <label htmlFor="cb_nwtama" className="my-auto text-xl">
            北多摩西部
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_stama"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={stama}
            onChange={() => toggleCityOption(2)}
          />
          <label htmlFor="cb_stama" className="my-auto text-xl">
            南多摩
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="cb_wtama"
            type="checkbox"
            className="checkbox checkbox-xl"
            checked={wtama}
            onChange={() => toggleCityOption(1)}
          />
          <label htmlFor="cb_wtama" className="my-auto text-xl">
            西多摩
          </label>
        </div>
      </div>
    </div>
  );
};

export default CityOption;

import clsx from "clsx";
import styles from "./TokyoSvg.module.css";

type Props = {
  // wtama(4), stama(3), ntama(2), w23(1), e23(0)
  cityOption: number;
};
const TokyoSvg: React.FC<Props> = ({ cityOption }) => {
  const wtama = ((1 << 4) & cityOption) === 1 << 4;
  const stama = ((1 << 3) & cityOption) === 1 << 3;
  const ntama = ((1 << 2) & cityOption) === 1 << 2;
  const w23 = ((1 << 1) & cityOption) === 1 << 1;
  const e23 = ((1 << 0) & cityOption) === 1 << 0;

  return (
    <svg viewBox="0 0 820 440" xmlns="http://www.w3.org/2000/svg">
      <title>Tokyo city map</title>
      <path
        id="13101"
        name="千代田区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 636,223 7,5 8,1 9,-12 -2,-6 11,-8 -9,-8 -2,5 -17,-3 -11,13 v 7 z"
      />
      <path
        id="13102"
        name="中央区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 656,245 7,7 12,-10 -2,-18 4,-10 -2,-4 -1,-4 v -1 l -5,-2 -11,8 2,6 -9,12 3,3 -2,6 5,4 z"
      />
      <path
        id="13103"
        name="港区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 614,232 2,7 8,2 v 9 l -3,5 -1,6 h 6 l 3,3 4,8 17,-1 2,-3 v -6 l -5,-1 1,-4 5,2 -1,-8 1,-6 h 3 l 1,-3 -5,-4 2,-6 -3,-3 -8,-1 -7,-5 -6,-6 -8,2 -3,6 z m 47,40 8,-6 -4,-6 -4,3 3,-2 2,3 -7,5 z"
      />
      <path
        id="13104"
        name="新宿区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 641,197 -2,-5 -8,1 -8,-5 -12,-1 -1,-9 -16,1 -5,-7 -3,10 4,1 2,5 1,2 9,-1 -5,4 -3,14 1,7 2,3 9,-7 5,1 7,7 -2,6 3,1 3,-6 8,-2 v -7 z"
      />
      <path
        id="13105"
        name="文京区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 658,184 -4,-5 v -8 l -1,-2 -7,-2 -2,2 -4,-3 -6,6 v 4 l -9,-1 v 6 l -5,2 1,4 2,1 8,5 8,-1 2,5 17,3 2,-5 1,-3 -4,-1 -2,-8 z"
      />
      <path
        id="13106"
        name="台東区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 669,203 5,2 14,-23 2,-9 -14,-3 -9,6 -13,-5 v 8 l 4,5 -3,-1 2,8 4,1 -1,3 z"
      />
      <path
        id="13107"
        name="墨田区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 674,206 1,4 15,2 2,-5 6,-1 -1,-14 13,5 3,-7 -5,-5 7,-4 -17,-22 -4,4 -4,10 -2,9 -14,23 z"
      />
      <path
        id="13108"
        name="江東区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 663,252 10,16 4,-2 5,7 3,-4 -2,-9 5,-1 v -3 l 21,-4 v 9 l -10,3 15,-2 1,-19 3,-3 1,-36 -9,-7 -13,-5 1,14 -6,1 -2,5 -15,-2 2,4 -4,10 2,18 z m 36,5 v 5 l 3,-1 v -3 l 6,-2 h -6 l 1,-2 z m 4,8 1,10 3,-1 3,8 4,-18 z m -34,1 -8,6 2,3 10,17 4,-7 -9,-14 3,-2 z m 3,4 7,11 2,-4 -6,-9 z"
      />
      <path
        id="13109"
        name="品川区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 609,293 9,1 3,8 7,-3 2,7 13,-3 6,1 v 4 h 5 v -9 l 4,2 5,-3 -11,-19 v -11 l -2,3 -17,1 -4,-8 -3,-3 h -6 l 1,-6 h -1 l -4,4 2,8 -15,4 6,2 -6,8 v 6 z m 54,-18 -2,-3 -2,-3 h -1 l 2,7 z"
      />
      <path
        id="13110"
        name="目黒区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 603,287 v -6 l 6,-8 -6,-2 15,-4 -2,-8 4,-4 -7,-1 -17,-18 -9,-2 7,11 2,12 -5,13 -14,-6 4,13 -3,9 h 11 l 2,7 v -3 l 4,-1 v -7 z"
      />
      <path
        id="13111"
        name="大田区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 663,298 -5,3 -4,-2 v 9 h -5 v -4 l -6,-1 -13,3 -2,-7 -7,3 -3,-8 -9,-1 -6,-6 -8,-5 v 7 l -4,1 v 3 l -2,8 -6,-6 -7,-1 -6,4 4,2 -2,3 9,3 11,24 17,9 -4,8 4,7 11,-2 7,-5 5,3 5,-4 14,1 31,20 8,-16 -18,-29 -11,1 -6,8 -4,-4 -4,2 -8,-7 v -4 h -16 l 31,-3 4,-4 v 4 h 12 l 3,-2 -4,-6 -10,3 6,-7 z m -22,23 4,4 5,-2 -3,-6 z m 9,0 7,6 6,-9 h -12 z"
      />
      <path
        id="13112"
        name="世田谷区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 522,273 v 4 h 5 l 17,4 19,15 9,7 2,-3 -4,-2 6,-4 7,1 6,6 2,-8 -2,-7 h -11 l 3,-9 -4,-13 14,6 5,-13 -2,-12 -7,-11 -4,-8 h -6 l -18,6 -11,-5 -10,-5 4,6 h -6 l -2,-8 -9,-3 h -2 -5 l 2,7 -4,1 5,4 v 3 l -2,2 5,12 v 5 h -4 l -2,5 7,13 z"
      />
      <path
        id="13113"
        name="渋谷区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 587,234 9,2 17,18 7,1 h 1 l 3,-5 v -9 l -8,-2 -2,-7 5,-7 -3,-1 2,-6 -7,-7 -5,-1 -9,7 -2,-3 -1,-7 -15,15 -2,4 h 6 z"
      />
      <path
        id="13114"
        name="中野区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 581,208 -6,4 4,10 15,-15 3,-14 5,-4 -9,1 -1,-2 -2,-5 -4,-1 3,-10 v -1 l -5,-3 -9,8 h -12 l -9,-9 h -4 l -2,5 6,12 15,7 h 5 l 2,13 5,1 z"
      />
      <path
        id="13115"
        name="杉並区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 579,222 -4,-10 6,-4 v -3 l -5,-1 -2,-13 h -5 l -15,-7 -6,-12 -15,3 -8,8 -5,-2 -1,8 7,6 -7,11 6,4 -3,2 3,5 9,3 2,8 h 6 l -4,-6 10,5 11,5 18,-6 z"
      />
      <path
        id="13116"
        name="豊島区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 646,167 -8,-7 -6,1 -1,-4 -4,1 -2,4 -4,-5 h -7 l -5,9 -4,-6 -5,-1 -9,4 -1,6 -1,2 v 1 l 5,7 16,-1 1,9 12,1 -2,-1 -1,-4 5,-2 v -6 l 9,1 v -4 l 6,-6 4,3 z"
      />
      <path
        id="13117"
        name="北区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 646,167 7,2 3,-3 4,-2 -2,-3 -14,-9 1,-3 5,-1 -7,-4 8,-6 v -4 l -10,3 -8,-5 2,-8 v -7 h -10 l -3,-3 -11,-1 -7,-6 h -1 l -5,11 5,4 5,-1 3,16 7,6 5,9 -2,5 4,5 2,-4 4,-1 1,4 6,-1 z"
      />
      <path
        id="13118"
        name="荒川区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 654,171 13,5 9,-6 14,3 4,-10 -17,-2 -3,-5 2,-4 -5,-3 -21,-1 -5,1 -1,3 14,9 2,3 -4,2 -3,3 z"
      />
      <path
        id="13119"
        name="板橋区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 623,152 -5,-9 -7,-6 -3,-16 -5,1 -5,-4 5,-11 -29,-2 -9,3 h -4 l -3,6 -10,10 v 1 l 8,10 6,-2 20,3 4,9 -1,13 6,1 v 4 l 9,-4 5,1 4,6 5,-9 h 7 z"
      />
      <path
        id="13120"
        name="練馬区"
        className={clsx(w23 ? styles.w23 : styles.notselected)}
        d="m 503,180 16,9 1,-8 5,2 8,-8 15,-3 2,-5 h 4 l 9,9 h 12 l 9,-8 5,3 1,-2 1,-6 v -4 l -6,-1 1,-13 -4,-9 -20,-3 -6,2 -8,-10 -1,11 -4,1 -2,-4 -13,2 5,-5 -6,-3 v -1 h -2 -4 l -5,7 -9,5 v 2 l -6,2 5,11 z"
      />
      <path
        id="13121"
        name="足立区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 694,143 h 4 l 2,4 1,-6 4,4 2,-6 4,1 6,-6 10,3 -10,-20 1,-9 -7,-4 -9,7 -4,-7 3,-10 -3,-3 v 3 l -4,3 -13,3 -13,-1 -10,-10 -10,4 -4,4 8,14 -4,7 h -6 l -7,6 -2,8 8,5 10,-3 v 4 l -8,6 7,4 21,1 5,3 -2,4 3,5 17,2 4,-4 -5,-11 z"
      />
      <path
        id="13122"
        name="葛飾区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 715,181 7,8 6,-3 6,2 4,-24 h 3 l 7,-8 -4,-4 7,-1 -8,-16 2,-4 9,-6 v -4 l -13,2 -4,-6 4,-6 -2,-3 -12,2 -2,4 -7,-6 -1,9 10,20 -10,-3 -6,6 -4,-1 -2,6 -4,-4 -1,6 -2,-4 h -4 l -1,5 5,11 z"
      />
      <path
        id="13123"
        name="江戸川区"
        className={clsx(e23 ? styles.e23 : styles.notselected)}
        d="m 710,197 9,7 -1,36 h 4 l -1,14 8,3 10,-1 8,-5 3,-10 -1,-15 -1,-1 1,-6 16,-5 9,-13 -2,-9 -12,-13 -3,-6 3,-13 -8,-8 -1,-1 -7,1 4,4 -7,8 h -3 l -4,24 -6,-2 -6,3 -7,-8 -7,4 5,5 z m 11,63 v -3 l 6,1 v 3 l 1,-2 -6,-3 z m 7,1 2,-2 5,2 -1,2 1,-2 -4,-2 z"
      />
      <path
        id="13201"
        name="八王子市"
        className={clsx(stama ? styles.stama : styles.notselected)}
        d="m 246,281 8,7 9,5 4,-3 6,2 3,-7 7,-9 7,-3 5,2 v 5 l 11,-1 6,3 11,-3 6,2 v -9 l 4,13 5,2 7,3 5,-4 16,10 1,-6 5,-3 8,-12 8,-5 12,-6 -12,-14 -13,7 -16,-1 1,-3 -8,-1 -8,-10 v -4 l 11,-6 3,-19 3,-1 -3,-4 -27,-2 -3,-2 -4,-13 1,-3 -2,1 -8,-7 -3,5 -5,-2 -3,4 -1,-2 -6,2 -17,-3 -4,5 -10,-3 -5,2 -24,-8 -9,8 -5,21 -21,-1 -8,20 4,6 1,10 12,6 11,-8 12,5 1,10 5,7 -2,3 7,6 z"
      />
      <path
        id="13202"
        name="立川市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 365,208 25,8 3,-5 3,2 4,-4 1,-6 -5,-5 4,-1 5,-4 -6,-7 2,-1 -3,-1 4,-2 8,7 2,-10 -1,-1 -17,-6 h 3 l -9,-3 -15,-1 -9,-10 1,4 5,7 -6,-2 v 2 l -18,-6 -5,3 1,10 h 19 v 4 l 14,9 z"
      />
      <path
        id="13203"
        name="武蔵野市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 500,198 8,4 4,-3 7,7 7,-11 -7,-6 -16,-9 h -8 l -13,9 -6,-1 v -4 h -3 l -1,4 6,3 1,10 2,3 11,1 -1,-11 z"
      />
      <path
        id="13204"
        name="三鷹市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 523,217 h 2 l -3,-5 3,-2 -6,-4 -7,-7 -4,3 -8,-4 -9,-4 1,11 -11,-1 -2,-3 -1,10 -6,-2 2,6 1,3 -3,1 5,11 3,-1 5,5 2,-3 -2,-3 1,-10 12,-2 2,2 3,15 6,1 2,4 5,-5 -5,-8 10,4 -5,-4 4,-1 -2,-7 z"
      />
      <path
        id="13205"
        name="青梅市"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 195,126 11,-7 12,-3 14,15 8,-1 8,5 13,2 6,6 h 24 l 6,6 -3,-20 5,-6 4,3 6,3 7,-2 3,-3 -5,-8 6,2 3,-6 -5,-3 -6,-17 v -4 -6 l -8,3 -2,-12 h -6 l -3,-3 -4,2 -3,-4 -4,1 -12,3 -14,-1 -2,-4 -6,4 -15,-9 h -4 l -3,5 -11,-1 -18,-8 h -1 l 2,7 9,10 -2,24 -22,14 1,9 -8,4 v 5 l 5,-4 3,2 v -4 l 5,6 h 3 v -5 z"
      />
      <path
        id="13206"
        name="府中市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 409,240 24,8 9,-3 13,3 7,-2 7,5 v -7 l -3,-2 4,-8 3,-8 -4,-9 1,-5 -3,-4 -3,3 v 2 l -6,-1 -5,3 2,-3 -4,2 -5,-5 -1,-5 -9,6 -9,1 v -3 l -2,-8 -3,7 -4,4 -3,14 2,2 -5,-2 -13,3 z"
      />
      <path
        id="13207"
        name="昭島市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 358,208 h 7 l 10,-19 -14,-9 v -4 h -19 l -2,3 -9,2 -1,3 -5,4 -1,3 4,13 3,2 z"
      />
      <path
        id="13208"
        name="調布市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 473,254 17,6 11,4 2,-14 7,-4 10,5 h 4 v -5 l -5,-12 2,-2 v -3 l -10,-4 5,8 -5,5 -2,-4 -6,-1 -3,-15 -2,-2 -12,2 -1,10 2,3 -2,3 -5,-5 -3,1 -5,-11 3,-1 -1,-3 -4,-3 -1,5 4,9 -3,8 -4,8 3,2 v 7 z"
      />
      <path
        id="13209"
        className={clsx(stama ? styles.stama : styles.notselected)}
        d="m 449,305 -8,-5 -10,-7 -4,-8 -9,5 -4,-7 -2,3 -5,-1 -4,5 -5,-3 -4,1 -5,-5 -17,4 -5,3 -1,6 -16,-10 -5,4 -7,-3 -5,-2 -4,-13 v 9 l -6,-2 -11,3 -6,-3 -11,1 v -5 l -5,-2 -7,3 -7,9 11,-3 6,1 10,7 h 15 l 5,2 7,-3 17,6 23,13 6,1 3,8 h 5 l 5,13 4,2 9,13 9,4 6,9 3,6 -1,6 6,2 3,14 14,-1 -4,-3 -2,-4 7,-8 -1,-12 1,-3 -5,-7 v -15 l -9,-4 1,-6 5,-12 7,-2 3,1 -5,11 6,10 12,-10 1,-4 -10,-6 z"
        name="町田市"
      />
      <path
        id="13210"
        name="小金井市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 470,212 4,3 -2,-6 6,2 1,-10 -1,-10 -6,-3 1,-4 -2,-2 -11,3 -1,4 -9,-1 v 3 l -8,1 -1,6 6,2 -2,4 1,5 5,5 4,-2 -2,3 5,-3 6,1 v -2 l 3,-3 z"
      />
      <path
        id="13211"
        name="小平市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 412,179 20,7 v 4 l 3,2 3,-5 4,5 8,-1 v -3 l 9,1 1,-4 11,-3 -5,-11 2,-2 1,-6 h -2 l -3,-2 -1,3 v -3 3 h -4 l -1,-4 -2,10 v -10 l -4,-3 -6,4 -1,-3 -3,1 1,9 -6,-1 -1,-5 -9,-3 -11,6 -8,1 -11,6 h -3 l 17,6 z"
      />
      <path
        id="13212"
        name="日野市"
        className={clsx(stama ? styles.stama : styles.notselected)}
        d="m 406,247 3,-7 -10,-12 -9,-12 -25,-8 h -7 l 3,4 -3,1 -3,19 -11,6 v 4 l 8,10 8,1 -1,3 16,1 13,-7 1,-2 8,5 6,-7 z"
      />
      <path
        id="13213"
        name="東村山市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 457,142 -6,-1 3,-3 -3,-8 -1,-2 1,-2 -1,-3 -5,2 -5,-1 -7,5 -25,8 -1,3 5,9 4,16 11,-6 9,3 1,5 6,1 -1,-9 7,-14 z"
      />
      <path
        id="13214"
        name="国分寺市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 422,207 3,-7 2,8 v 3 l 9,-1 9,-6 2,-4 -6,-2 1,-6 -4,-5 -3,5 -3,-2 v -4 l -20,-7 -2,10 -8,-7 -4,2 3,1 -2,1 6,7 -5,4 14,2 z"
      />
      <path
        id="13215"
        name="国立市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 422,207 -8,-8 -14,-2 -4,1 5,5 -1,6 -4,4 -3,-2 -3,5 9,12 13,-3 5,2 -2,-2 3,-14 z"
      />
      <path
        id="13218"
        name="福生市"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 330,184 1,-3 9,-2 2,-3 -1,-10 5,-3 -4,-6 -4,-2 2,6 -5,-5 -3,1 1,-4 -14,-5 -8,8 4,13 7,5 1,15 2,-1 z"
      />
      <path
        id="13219"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 522,277 v -4 l 3,-4 -7,-13 2,-5 -10,-5 -7,4 -2,14 8,8 z"
        name="狛江市"
      />
      <path
        id="13220"
        name="東大和市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 373,141 10,3 -1,10 3,1 3,14 9,3 11,-6 8,-1 -4,-16 -5,-9 1,-3 -2,-3 -14,4 -12,-3 -10,5 z"
      />
      <path
        id="13221"
        name="清瀬市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 466,138 4,-6 16,-7 1,-8 -5,-3 7,-11 -4,-4 -15,17 -6,1 -13,9 -1,2 1,2 3,8 -3,3 6,1 z"
      />
      <path
        id="13222"
        name="東久留米市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 487,148 2,-18 -23,8 -9,4 -8,3 -7,14 3,-1 1,3 6,-4 4,3 v 10 l 2,-10 1,4 h 4 v -3 3 l 1,-3 3,2 h 2 l -1,6 9,-7 -3,-3 4,-1 z"
      />
      <path
        id="13223"
        name="武蔵村山市"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 365,162 -1,-4 9,10 15,1 -3,-14 -3,-1 1,-10 -10,-3 -3,-1 v -3 l -5,2 -4,-3 -1,-2 1,-1 -5,2 -4,-5 -10,27 4,6 18,6 v -2 l 6,2 z"
      />
      <path
        id="13224"
        name="多摩市"
        className={clsx(stama ? styles.stama : styles.notselected)}
        d="m 414,283 3,-6 9,-6 v -5 l 5,-3 -2,-11 4,-4 -24,-8 -3,7 -3,-1 -6,7 -8,-5 -1,2 12,14 -12,6 -8,5 -8,12 17,-4 5,5 4,-1 5,3 4,-5 5,1 z"
      />
      <path
        id="13225"
        name="稲城市"
        className={clsx(stama ? styles.stama : styles.notselected)}
        d="m 473,254 -4,-3 -7,-5 -7,2 -13,-3 -9,3 -4,4 2,11 -5,3 v 5 l 3,4 5,1 1,6 10,8 8,-1 -4,-11 13,-6 2,-1 2,-5 5,-2 -2,-5 z"
      />
      <path
        id="13227"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 333,153 -9,-21 -8,-5 -7,2 -6,-3 -4,-3 -5,6 3,20 11,3 3,4 8,-8 z"
        name="羽村市"
      />
      <path
        id="13228"
        name="あきる野市"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 311,156 -3,-4 -11,-3 -6,-6 h -24 l 4,5 12,3 1,9 4,2 -1,8 -15,-1 -15,-6 -13,-1 -9,-4 -2,-7 -15,-9 -9,-1 -1,-7 -13,-8 h -3 v 5 h -3 l -5,-6 v 4 l -3,-2 -5,4 -1,3 8,7 -5,3 v 3 l 7,2 11,15 1,30 5,4 v 12 l 21,1 5,-21 9,-8 24,8 5,-2 10,3 4,-5 17,3 6,-2 1,2 3,-4 5,2 3,-5 8,7 -1,-15 -7,-5 z"
      />
      <path
        id="13229"
        className={clsx(ntama ? styles.ntama : styles.notselected)}
        d="m 471,182 2,2 h 3 v 4 l 6,1 13,-9 h 8 l 3,-27 -5,-11 -5,3 -9,3 -9,10 -4,1 3,3 -9,7 -2,2 z"
        name="西東京市"
      />
      <path
        id="13303"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 333,153 -1,4 3,-1 5,5 -2,-6 4,2 10,-27 4,5 5,-2 1,-3 -3,-5 -5,1 2,-1 -4,-6 2,-5 -15,-2 -3,-3 -13,3 -3,6 -6,-2 5,8 -3,3 8,5 z"
        name="西多摩郡瑞穂町"
      />
      <path
        id="13305"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 267,143 -6,-6 -13,-2 -8,-5 -8,1 -14,-15 -12,3 -11,7 13,8 1,7 9,1 15,9 2,7 9,4 13,1 15,6 15,1 1,-8 -4,-2 -1,-9 -12,-3 z"
        name="西多摩郡日の出町"
      />
      <path
        id="13307"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 202,210 v -12 l -5,-4 -1,-30 -11,-15 -7,-2 v -3 l 5,-3 -8,-7 -4,4 -20,-13 -6,3 -2,4 h -15 l -16,11 -9,2 -2,13 -9,-1 -12,6 1,2 10,17 34,21 9,2 7,4 h 11 l 19,17 17,6 6,-2 z"
        name="西多摩郡檜原村"
      />
      <path
        id="13308"
        className={clsx(wtama ? styles.wtama : styles.notselected)}
        d="m 175,134 1,-3 v -5 l 8,-4 -1,-9 22,-14 2,-24 -9,-10 -2,-7 -3,-6 -9,-6 -36,-4 -14,-7 -6,1 -3,2 -7,-2 -33,-24 -6,2 -7,12 -12,3 -5,-4 -9,5 -17,11 -2,7 1,5 4,5 -1,6 4,7 7,6 6,-1 v 22 l 4,15 8,9 -2,12 7,13 10,5 4,9 1,2 12,-6 9,1 2,-13 9,-2 16,-11 h 15 l 2,-4 6,-3 20,13 z"
        name="西多摩郡奥多摩町"
      />
    </svg>
  );
};

export default TokyoSvg;

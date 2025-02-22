type Area = "e23" | "w23" | "wtama" | "stama" | "ntama";

type Station = {
  name: string;
  address: string;
  lon: number;
  lat: number;
  area: Area;
};

export const genGoogleMapLinkUrl = (latitude: number, longitude: number) =>
  `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;

export const getGoogleMapRouteUrl = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=transit`;

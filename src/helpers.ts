// helpers.ts
export const capitalizeFirstLetter = (string: string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


// Initialising types to remove typeScript errors in files
export interface CarModel {
  model: string;
  year: string;
  image: string;
}

export interface Car {
  id: number;
  make: string;
  year: string;
  src: string;
  imgSize: string;
  models: CarModel[];
}

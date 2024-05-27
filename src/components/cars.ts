import Audi from "../assets/audiLogo.png";
import VW from "../assets/VWLogo.png";
import BMW from "../assets/BMW.png";
import Toyota from "../assets/Toyota.png"
import Ford from "../assets/Ford.png"
import Mercedes from "../assets/Mercedes-Benz.png"
import Volvo from "../assets/Volvo.png"
import Skoda from "../assets/Skoda.png"
import Vauxhall from "../assets/Vauxhall.png"
import Honda from "../assets/Honda.png"
import Seat from "../assets/Seat.png"
import Cupra from "../assets/Cupra.png"

type carsDataType= {
	id: number;
  make: string;
  year: string;
  src: string;
  imgSize: "sm" | "md" | "lg";
};

export const carsData:carsDataType[] = [
	{
		id: 0,
		make: "Audi",
		year: "1965-",
		src: Audi,
		imgSize: "md",
	},
	{
		id: 1,
		make: "Volkswagen",
		year: "1938-",
		src: VW,
		imgSize: "sm",
	},
	{
		id: 2,
		make: "BMW",
		year: "1927-",
		src: BMW,
		imgSize: "sm",
	},
	{
		id: 3,
		make: "Toyota",
		year: "1936-",
		src: Toyota,
		imgSize: "sm",
	},
	{
		id: 4,
		make: "Ford",
		year: "1903-",
		src: Ford,
		imgSize: "md",
	},
	{
		id: 5,
		make: "Mercedes",
		year: "1926-",
		src: Mercedes,
		imgSize: "sm",
	},
	{
		id: 6,
		make: "Volvo",
		year: "1927-",
		src: Volvo,
		imgSize: "sm",
	},
	{
		id: 7,
		make: "Skoda",
		year: "1934-",
		src: Skoda,
		imgSize: "sm",
	},
	{
		id: 8,
		make: "Vauxhall",
		year: "1933-",
		src: Vauxhall,
		imgSize: "sm",
	},
	{
		id: 9,
		make: "Honda",
		year: "1949-",
		src: Honda,
		imgSize: "sm",
	},
	{
		id: 10,
		make: "Seat",
		year: "1963-",
		src: Seat,
		imgSize: "sm",
	},
  {
		id: 10,
		make: "Cupra",
		year: "2018-",
		src: Cupra,
		imgSize: "md",
	},
];

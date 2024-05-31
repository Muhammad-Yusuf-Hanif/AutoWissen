import Audi from "../assets/audiLogo.png";
import VW from "../assets/VWLogo.png";
import BMW from "../assets/BMW.png";
import Toyota from "../assets/Toyota.png";
import Ford from "../assets/Ford.png";
import Mercedes from "../assets/Mercedes-Benz.png";
import Volvo from "../assets/Volvo.png";
import Skoda from "../assets/Skoda.png";
import Vauxhall from "../assets/Vauxhall.png";
import Honda from "../assets/Honda.png";
import Seat from "../assets/Seat.png";
import Cupra from "../assets/Cupra.png";

type carsDataType = {
	id: number;
	make: string;
	year: string;
	src: string;
	imgSize: "sm" | "md" | "lg";
	models: any;
};

export const carsData: carsDataType[] = [
	{
		id: 0,
		make: "Audi",
		year: "1965-",
		src: Audi,
		imgSize: "md",
		models: [
			{
				model: "Audi e-tron",
				image: "",
				year: "",
			},
			{
				model: "Audi TTRS",
				image: "",
				year: "",
			},
			{
				model: "Audi TTS",
				image: "",
				year: "",
			},
			{
				model: "Audi RS7",
				image: "",
				year: "",
			},
			{
				model: "Audi RS6 (C7, C8)",
				image: "",
				year: "",
			},
			{
				model: "Audi RS5",
				image: "",
				year: "",
			},
			{
				model: "Audi RS4 (B8, B9)",
				image: "",
				year: "",
			},
			{
				model: "Audi RS3",
				image: "",
				year: "",
			},
			{
				model: "Audi S8 (D4, D5)",
				image: "",
				year: "",
			},
			{
				model: "Audi S7",
				image: "",
				year: "",
			},
			{
				model: "Audi S6 (C7, C8)",
				image: "",
				year: "",
			},
			{
				model: "Audi S5",
				image: "",
				year: "",
			},
			{
				model: "Audi S4 (B8, B9)",
				image: "",
				year: "",
			},
			{
				model: "Audi S3 (8V)",
				image: "",
				year: "",
			},
			{
				model: "Audi S1",
				image: "",
				year: "",
			},
			{
				model: "Audi TT (8J, 8S)",
				image: "",
				year: "",
			},
			{
				model: "Audi Q8",
				image: "",
				year: "",
			},
			{
				model: "Audi Q7",
				image: "",
				year: "",
			},
			{
				model: "Audi Q5",
				image: "",
				year: "",
			},
			{
				model: "Audi Q3",
				image: "",
				year: "",
			},
			{
				model: "Audi Q2",
				image: "",
				year: "",
			},
			{
				model: "Audi A8 (D4, D5)",
				image: "",
				year: "",
			},
			{
				model: "Audi A7",
				image: "",
				year: "",
			},
			{
				model: "Audi A6 (C7, C8)",
				image: "",
				year: "",
			},
			{
				model: "Audi A5",
				image: "",
				year: "",
			},
			{
				model: "Audi A4 (B8, B9)",
				image: "",
				year: "",
			},
			{
				model: "Audi A3 (8V)",
				image: "",
				year: "",
			},
			{
				model: "Audi A1",
				image: "",
				year: "",
			},
			{
				model: "Audi R8",
				image: "",
				year: "",
			},
			{
				model: "Audi RS6 Avant (C6)",
				image: "",
				year: "",
			},
			{
				model: "Audi RS6 (C5)",
				image: "",
				year: "",
			},
			{
				model: "Audi RS4 (B5, B7)",
				image: "",
				year: "",
			},
			{
				model: "Audi S8 (D3)",
				image: "",
				year: "",
			},
			{
				model: "Audi S6 (C5, C6)",
				image: "",
				year: "",
			},
			{
				model: "Audi S4 (B6, B7)",
				image: "",
				year: "",
			},
			{
				model: "Audi S3 (8L, 8P)",
				image: "",
				year: "",
			},
			{
				model: "Audi S3 (8L, 8P)",
				image: "",
				year: "",
			},
			{
				model: "Audi TT (8N)",
				image: "",
				year: "",
			},
			{
				model: "Audi A8 (D3)",
				image: "",
				year: "",
			},
			{
				model: "Audi A6 (C5, C6)",
				image: "",
				year: "",
			},
			{
				model: "Audi A4 (B6, B7)",
				image: "",
				year: "",
			},
			{
				model: "Audi A3 (8L, 8P)",
				image: "",
				year: "",
			},
			{
				model: "Audi A2",
				image: "",
				year: "",
			},
			{
				model: "Audi RS2 Avant",
				image: "",
				year: "",
			},
			{
				model: "Audi S8 (D2)",
				image: "",
				year: "",
			},
			{
				model: "Audi S6 (C4)",
				image: "",
				year: "",
			},
			{
				model: "Audi S4 (B5)",
				image: "",
				year: "",
			},
			{
				model: "Audi S2",
				image: "",
				year: "",
			},
			{
				model: "Audi Cabriolet",
				image: "",
				year: "",
			},
			{
				model: "Audi A8 (D2)",
				image: "",
				year: "",
			},
			{
				model: "Audi A6 (C4)",
				image: "",
				year: "",
			},
			{
				model: "Audi A4 (B5)",
				image: "",
				year: "",
			},
			{
				model: "Audi 100 (C4)",
				image: "",
				year: "",
			},
			{
				model: "Audi 90 (B4)",
				image: "",
				year: "",
			},
		],
	},
	{
		id: 1,
		make: "Volkswagen",
		year: "1938-",
		src: VW,
		imgSize: "sm",
		models: [],
	},
	{
		id: 2,
		make: "Bmw",
		year: "1927-",
		src: BMW,
		imgSize: "sm",
		models: [
			{
				model: "BMW 3 Series",
				image: "",
				year: "",
			},
		],
	},
	{
		id: 3,
		make: "Toyota",
		year: "1936-",
		src: Toyota,
		imgSize: "sm",
		models: [],
	},
	{
		id: 4,
		make: "Ford",
		year: "1903-",
		src: Ford,
		imgSize: "md",
		models: [],
	},
	{
		id: 5,
		make: "Mercedes",
		year: "1926-",
		src: Mercedes,
		imgSize: "sm",
		models: [],
	},
	{
		id: 6,
		make: "Volvo",
		year: "1927-",
		src: Volvo,
		imgSize: "sm",
		models: [],
	},
	{
		id: 7,
		make: "Skoda",
		year: "1934-",
		src: Skoda,
		imgSize: "sm",
		models: [],
	},
	{
		id: 8,
		make: "Vauxhall",
		year: "1933-",
		src: Vauxhall,
		imgSize: "sm",
		models: [],
	},
	{
		id: 9,
		make: "Honda",
		year: "1949-",
		src: Honda,
		imgSize: "sm",
		models: [],
	},
	{
		id: 10,
		make: "Seat",
		year: "1963-",
		src: Seat,
		imgSize: "sm",
		models: [],
	},
	{
		id: 10,
		make: "Cupra",
		year: "2018-",
		src: Cupra,
		imgSize: "md",
		models: [],
	},
];

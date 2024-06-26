// Car Brands
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

// Audi Images
import Q4_e_tron from "../assets/audi/audi_q4_e-tron.jpg";
import TTRS_2023 from "../assets/audi/TTRS_2023.jpg";
import TTS_2021 from "../assets/audi/TTS_2021.jpg";
import RS7_2023 from "../assets/audi/RS7_2023.jpg";
import RS6_C8 from "../assets/audi/RS6_C8.jpg";
import RS6_C7 from "../assets/audi/rs6_c7.jpg";
import TT_2023 from "../assets/audi/TT_2023.jpg";
import TTS_2023 from "../assets/audi/TTS_2023.avif";
import TT_20Years from "../assets/audi/TT_20Years.jpg";
import TT_S_Line_2023 from "../assets/audi/TT_S_Line_2023.jpg";
// import TT_2022 from "../assets/audi/TT_2022.jpg";

//Car Details
import electric from "../assets/electric.png";
import fuel from "../assets/fuel.png";

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
				model: "Audi Q4 e-tron",
				image: Q4_e_tron,
				year: "2024",
				Desc: "Pricing: The Audi Q4 e-tron 45 has a Recommend Retail Price (RRP) of £49,915 \n\nDrivetrain and Performance: The Audi Q4 e-tron 45 is a full electric vehicle (BEV). The maximum power of the Audi Q4 e-tron 45 is 210 kW (282 hp). The maximum torque is 402 lb-ft. The Audi Q4 e-tron 45 is rear wheel drive and can accelerate from 0 to 62 miles per hour in 6.7 seconds. The top speed is 112 mph. \n\nBattery and Charging: The battery of the Audi Q4 e-tron 45 has a total capacity of 82 kWh. The usable capacity is 77 kWh. An estimated range of about 260 miles is achievable on a fully charged battery. The actual range will however depend on several factors including climate, terrain, use of climate control systems and driving style. For example: sustaining high speeds in cold weather could result in a range of around 185 mi. However, driving at low speeds in mild weather will increase the range to around 380 mi. Charging is done using a Type 2 connector and the on-board charger has a maximum power of 11 kW. This charges a fully depleted battery back to full in around 8 hours 15 minutes. However, a 3-phase grid connection is needed to achieve this. The majority of homes and charge points currently do not have this connection. In most cases the maximum charging power will be 7.4 kW, allowing for a charge time of 12 hours 15 minutes and a charge rate of 21 mph. Charging the car using a regular wall plug will take around 39 hours 30 minutes. Rapid charging is possible through a CCS connection. The maximum rapid charge power is 135 kW. The battery can't be charged continuously at this power. In an average rapid charge session the average charge power will be around 120 kW. This charges the battery from 10% to 80% in around 30 minutes. A rapid charge like this will add about 180 miles of range. \n\nEnergy Consumption: The estimated combined (motorway and city) energy consumption of the Audi Q4 e-tron 45 is about 296 Wh per mile. By comparison, this energy consumption is the equivalent of a fuel consumption of 137 mpg in a traditional fuel car. The actual energy consumption will depend on several factors including climate, terrain, use of climate control systems and driving style. For example: sustaining high speeds in cold weather could result in an energy use of around 416 Wh per mile. However, driving at low speeds in mild weather will increase the efficiency to about 203 Wh per mile.",
				FuelType: electric,
				Power: "167-335 BHP",
			},
			{
				model: "Audi TT 2023",
				image: TT_2023,
				year: "2023",
				Desc: "Pricing: The Audi TT starts at a base price of £40,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TT is powered by a turbocharged 2.0-liter inline-four engine producing 228 horsepower. It features Audi's quattro all-wheel-drive system, offering balanced performance and control. The TT can accelerate from 0 to 60 mph in 5.2 seconds, with a top speed of 130 mph. Its refined suspension and advanced steering system provide a comfortable yet engaging driving experience.",
				FuelType: fuel,
				Power: "228 BHP",
			},
			{
				model: "Audi TTS 2023",
				image: TTS_2023,
				year: "2023",
				Desc: "Pricing: The Audi TTS starts at a base price of £50,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TTS is powered by a turbocharged 2.0-liter inline-four engine producing 288 horsepower. It features Audi's quattro all-wheel-drive system for enhanced stability and grip. The TTS can accelerate from 0 to 60 mph in just 4.5 seconds, with a top speed of 155 mph. Its sport suspension and dynamic steering provide a sporty and responsive driving experience.",
				FuelType: fuel,
				Power: "288 BHP",
			},
			{
				model: "Audi TT S Line Competition 2023",
				image: TT_S_Line_2023,
				year: "2023",
				Desc: "Pricing: The Audi TT S Line Competition starts at a base price of £45,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TT S Line Competition is powered by a turbocharged 2.0-liter inline-four engine producing 228 horsepower. It features Audi's quattro all-wheel-drive system for sporty handling. The S Line Competition can accelerate from 0 to 60 mph in 5.2 seconds, with a top speed of 130 mph. Enhanced design elements and sport suspension offer a dynamic and visually striking driving experience.",
				FuelType: fuel,
				Power: "228 BHP",
			},
			{
				model: "Audi TT 2023",
				// image: TT_2022,
				year: "2022",
				Desc: "Pricing: The Audi TT in 2022 started at a base price of £36,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2022 Audi TT was powered by a 2.0-liter turbocharged inline-four engine producing 228 horsepower. It featured front-wheel drive or optional quattro all-wheel drive. The TT could accelerate from 0 to 60 mph in 5.2 seconds, with a top speed of 155 mph. Its sleek design and advanced technology features made it a popular choice among sports car enthusiasts.",
				FuelType: fuel,
				Power: "228 BHP",
			},
			{
				model: "Audi TTRS 2023",
				image: TTRS_2023,
				year: "2023",
				Desc: "Pricing: The Audi TTRS starts at a base price of £65,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TTRS is powered by a turbocharged 2.5-liter inline-five engine producing over 400 horsepower. It features Audi's legendary quattro all-wheel-drive system, delivering exceptional traction and agility. The TTRS can accelerate from 0 to 60 mph in just under 3.5 seconds, with a top speed electronically limited to 155 mph. Its sport-tuned suspension and precise steering provide exhilarating handling and control, making every drive a thrilling experience.",
				FuelType: fuel,
				Power: "400+ BHP",
			},
			{
				model: "Audi TTS 2021",
				image: TTS_2021,
				year: "2021",
				Desc: "Pricing: The Audi TTS starts at a base price of £50,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TTS is equipped with a turbocharged 2.0-liter four-cylinder engine producing around 300 horsepower. It features Audi's renowned quattro all-wheel-drive system, providing excellent traction and stability in all conditions. The TTS can accelerate from 0 to 60 mph in approximately 4.5 seconds, with a top speed electronically limited to 155 mph. Its sport-tuned suspension and responsive handling make it a joy to drive, offering a perfect balance of performance and comfort.",
				FuelType: fuel,
				Power: "300+ BHP",
			},
			{
				model: "Audi TT 20 Years Edition",
				image: TT_20Years,
				year: "2023",
				Desc: "Pricing: The Audi TT 20 Years Edition starts at a base price of £55,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi TT 20 Years Edition is powered by a turbocharged 2.0-liter inline-four engine producing 288 horsepower. It features Audi's quattro all-wheel-drive system for reliable performance. The special edition can accelerate from 0 to 60 mph in 4.5 seconds, with a top speed of 155 mph. Exclusive design elements and special badging celebrate two decades of the iconic Audi TT.",
				FuelType: fuel,
				Power: "288 BHP",
			},
			// {
			// 	model: "Audi TTS",
			// 	image: TTS_2022,
			// 	year: "2022",
			// 	Desc: "Pricing: The Audi TTS in 2022 started at a base price of £46,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2022 Audi TTS was powered by a 2.0-liter turbocharged inline-four engine producing 288 horsepower. It featured quattro all-wheel drive for enhanced performance. The TTS could accelerate from 0 to 60 mph in 4.5 seconds, with a top speed of 155 mph. Its sporty design and responsive handling made it a dynamic choice in the TT lineup.",
			// 	FuelType: fuel,
			// 	Power: "288 BHP",
			// },
			// {
			// 	model: "Audi TTRS",
			// 	image: TTRS_2022,
			// 	year: "2022",
			// 	Desc: "Pricing: The Audi TTRS in 2022 started at a base price of £67,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2022 Audi TTRS was powered by a turbocharged 2.5-liter inline-five engine producing 394 horsepower. It featured quattro all-wheel drive for superior traction. The TTRS could accelerate from 0 to 60 mph in 3.6 seconds, with a top speed of 174 mph. Its powerful engine and precise handling made it a top performer in its class.",
			// 	FuelType: fuel,
			// 	Power: "394 BHP",
			// },
			// {
			// 	model: "Audi TT",
			// 	image: TT_2018,
			// 	year: "2018",
			// 	Desc: "Pricing: The Audi TT in 2018 started at a base price of £33,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2018 Audi TT was powered by a 2.0-liter turbocharged inline-four engine producing 220 horsepower. It featured front-wheel drive or optional quattro all-wheel drive. The TT could accelerate from 0 to 60 mph in 5.3 seconds, with a top speed of 155 mph. Its modern design and advanced technology features made it a popular choice.",
			// 	FuelType: fuel,
			// 	Power: "220 BHP",
			// },
			// {
			// 	model: "Audi TTS",
			// 	image: TTS_2018,
			// 	year: "2018",
			// 	Desc: "Pricing: The Audi TTS in 2018 started at a base price of £42,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2018 Audi TTS was powered by a 2.0-liter turbocharged inline-four engine producing 292 horsepower. It featured quattro all-wheel drive for enhanced performance. The TTS could accelerate from 0 to 60 mph in 4.6 seconds, with a top speed of 155 mph. Its sporty design and responsive handling made it a dynamic choice in the TT lineup.",
			// 	FuelType: fuel,
			// 	Power: "292 BHP",
			// },
			// {
			// 	model: "Audi TTRS",
			// 	image: TTRS_2018,
			// 	year: "2018",
			// 	Desc: "Pricing: The Audi TTRS in 2018 started at a base price of £60,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2018 Audi TTRS was powered by a turbocharged 2.5-liter inline-five engine producing 400 horsepower. It featured quattro all-wheel drive for superior traction. The TTRS could accelerate from 0 to 60 mph in 3.7 seconds, with a top speed of 174 mph. Its powerful engine and precise handling made it a top performer in its class.",
			// 	FuelType: fuel,
			// 	Power: "400 BHP",
			// },
			// {
			// 	model: "Audi TT",
			// 	image: TT_2014,
			// 	year: "2014",
			// 	Desc: "Pricing: The Audi TT in 2014 started at a base price of £30,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2014 Audi TT was powered by a 2.0-liter turbocharged inline-four engine producing 211 horsepower. It featured front-wheel drive or optional quattro all-wheel drive. The TT could accelerate from 0 to 60 mph in 5.6 seconds, with a top speed of 152 mph. Its balanced performance and stylish design continued to attract sports car enthusiasts.",
			// 	FuelType: fuel,
			// 	Power: "211 BHP",
			// },
			// {
			// 	model: "Audi TTS",
			// 	image: TTS_2014,
			// 	year: "2014",
			// 	Desc: "Pricing: The Audi TTS in 2014 started at a base price of £38,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2014 Audi TTS was powered by a 2.0-liter turbocharged inline-four engine producing 272 horsepower. It featured quattro all-wheel drive for enhanced performance. The TTS could accelerate from 0 to 60 mph in 5.1 seconds, with a top speed of 155 mph. Its sporty suspension and enhanced styling made it a dynamic option in the TT range.",
			// 	FuelType: fuel,
			// 	Power: "272 BHP",
			// },
			// {
			// 	model: "Audi TTRS",
			// 	image: TTRS_2014,
			// 	year: "2014",
			// 	Desc: "Pricing: The Audi TTRS in 2014 started at a base price of £50,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2014 Audi TTRS was powered by a turbocharged 2.5-liter inline-five engine producing 360 horsepower. It featured quattro all-wheel drive for superior traction. The TTRS could accelerate from 0 to 60 mph in 4.1 seconds, with a top speed of 174 mph. Its powerful engine and precise handling made it a top performer in its class.",
			// 	FuelType: fuel,
			// 	Power: "360 BHP",
			// },
			// {
			// 	model: "Audi TT",
			// 	image: TT_2010,
			// 	year: "2010",
			// 	Desc: "Pricing: The Audi TT in 2010 started at a base price of £28,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2010 Audi TT was available with a range of engines, including a 2.0-liter turbocharged inline-four producing 200 horsepower. It featured front-wheel drive or optional quattro all-wheel drive. The TT could accelerate from 0 to 60 mph in about 6.1 seconds, with a top speed of 150 mph. The agile handling and sleek design made it a popular choice among sports car enthusiasts.",
			// 	FuelType: fuel,
			// 	Power: "200 BHP",
			// },
			// {
			// 	model: "Audi TTS",
			// 	image: TTS_2010,
			// 	year: "2010",
			// 	Desc: "Pricing: The Audi TTS in 2010 started at a base price of £34,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2010 Audi TTS was powered by a 2.0-liter turbocharged inline-four engine producing 265 horsepower. It featured quattro all-wheel drive for enhanced stability. The TTS could accelerate from 0 to 60 mph in 5.2 seconds, with a top speed of 155 mph. It offered a sportier suspension and more aggressive styling compared to the standard TT.",
			// 	FuelType: fuel,
			// 	Power: "265 BHP",
			// },
			// {
			// 	model: "Audi TTRS",
			// 	image: TTRS_2010,
			// 	year: "2010",
			// 	Desc: "Pricing: The Audi TTRS in 2010 started at a base price of £45,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The 2010 Audi TTRS was powered by a turbocharged 2.5-liter inline-five engine producing 335 horsepower. It featured quattro all-wheel drive for exceptional traction. The TTRS could accelerate from 0 to 60 mph in 4.3 seconds, with a top speed of 174 mph. Its high-performance engine and dynamic handling made it a standout in the TT lineup.",
			// 	FuelType: fuel,
			// 	Power: "335 BHP",
			// },
			{
				model: "Audi RS7",
				image: RS7_2023,
				year: "2023",
				Desc: "Pricing: The Audi RS7 starts at a base price of £110,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS7 is powered by a twin-turbocharged 4.0-liter V8 engine producing over 600 horsepower. It features Audi's quattro all-wheel-drive system and an eight-speed automatic transmission, delivering lightning-fast acceleration and precise handling. The RS7 can sprint from 0 to 60 mph in under 3.5 seconds, with a top speed electronically limited to 155 mph. Its adaptive air suspension and dynamic steering system provide exceptional ride comfort and agility, making it a true high-performance luxury sedan.",
				FuelType: fuel,
				Power: "600+ BHP",
			},
			{
				model: "Audi RS6 C8 2021-",
				image: RS6_C8,
				year: "2023",
				Desc: "Pricing: The Audi RS6 starts at a base price of £90,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS6 is powered by a twin-turbocharged 4.0-liter V8 engine producing over 600 horsepower. It features Audi's quattro all-wheel-drive system and an eight-speed automatic transmission, delivering exhilarating acceleration and precise handling. The RS6 can accelerate from 0 to 60 mph in under 3.5 seconds, with a top speed electronically limited to 155 mph. Its adaptive air suspension and dynamic steering system provide exceptional ride comfort and agility, making it a top choice for performance enthusiasts and families alike.",
				FuelType: fuel,
				Power: "600+ BHP",
			},
			{
				model: "Audi RS6 C7 2015-2021",
				image: RS6_C7,
				year: "2023",
				Desc: "Pricing: The Audi RS6 starts at a base price of £90,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS6 is powered by a twin-turbocharged 4.0-liter V8 engine producing over 600 horsepower. It features Audi's quattro all-wheel-drive system and an eight-speed automatic transmission, delivering exhilarating acceleration and precise handling. The RS6 can accelerate from 0 to 60 mph in under 3.5 seconds, with a top speed electronically limited to 155 mph. Its adaptive air suspension and dynamic steering system provide exceptional ride comfort and agility, making it a top choice for performance enthusiasts and families alike.",
				FuelType: fuel,
				Power: "600+ BHP",
			},
			{
				model: "Audi RS5",
				image: "RS5_image_url",
				year: "2023",
				Desc: "Pricing: The Audi RS5 starts at a base price of £75,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS5 is equipped with a twin-turbocharged 2.9-liter V6 engine producing around 450 horsepower. It features Audi's quattro all-wheel-drive system and an eight-speed automatic transmission, delivering impressive performance and handling. The RS5 can accelerate from 0 to 60 mph in approximately 3.5 seconds, with a top speed electronically limited to 155 mph. Its sport-tuned suspension and responsive steering provide excellent agility and control, making it a thrilling sports coupe.",
				FuelType: fuel,
				Power: "450+ BHP",
			},
			{
				model: "Audi RS4 (B8, B9)",
				image: "RS4_image_url",
				year: "2023",
				Desc: "Pricing: The Audi RS4 starts at a base price of £70,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS4 is powered by a naturally aspirated 4.2-liter V8 engine producing around 450 horsepower. It features Audi's quattro all-wheel-drive system and a seven-speed dual-clutch automatic transmission, providing exhilarating performance and precise handling. The RS4 can accelerate from 0 to 60 mph in approximately 4.0 seconds, with a top speed electronically limited to 155 mph. Its sport-tuned suspension and advanced chassis technologies ensure exceptional agility and stability, making it a true high-performance sports sedan.",
				FuelType: fuel,
				Power: "450+ BHP",
			},
			{
				model: "Audi RS3",
				image: "RS3_image_url",
				year: "2023",
				Desc: "Pricing: The Audi RS3 starts at a base price of £50,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi RS3 is equipped with a turbocharged 2.5-liter inline-five engine producing around 400 horsepower. It features Audi's quattro all-wheel-drive system and a seven-speed dual-clutch automatic transmission, delivering impressive performance and agility. The RS3 can accelerate from 0 to 60 mph in approximately 3.5 seconds, with a top speed electronically limited to 155 mph. Its sport-tuned suspension and precise steering provide excellent handling and control, making it a top choice for enthusiasts.",
				FuelType: fuel,
				Power: "400+ BHP",
			},
			{
				model: "Audi S8 (D4, D5)",
				image: "S8_image_url",
				year: "2023",
				Desc: "Pricing: The Audi S8 starts at a base price of £90,000. Final pricing may vary depending on optional features and packages.\n\nDrivetrain and Performance: The Audi S8 is powered by a twin-turbocharged 4.0-liter V8 engine producing over 500 horsepower. It features Audi's quattro all-wheel-drive system and an eight-speed automatic transmission, delivering effortless acceleration and smooth power delivery. The S8 can accelerate from 0 to 60 mph in under 4.0 seconds, with a top speed electronically limited to 155 mph. Its adaptive air suspension and predictive active suspension system provide exceptional ride comfort and stability, making it a luxurious and high-performance executive sedan.",
				FuelType: fuel,
				Power: "500+ BHP",
			},
			{
				model: "Audi S7",
				image: "Audi_S7_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S7 has a Recommended Retail Price (RRP) of £72,000.\n\nDrivetrain and Performance: The Audi S7 features a 2.9-liter TFSI V6 engine combined with a mild-hybrid system. The maximum power output is 444 hp, with a torque of 443 lb-ft. It is equipped with Audi's quattro all-wheel-drive system and an 8-speed Tiptronic transmission. The S7 can accelerate from 0 to 62 mph in 4.5 seconds. The top speed is electronically limited to 155 mph.\n\nFuel Efficiency: The Audi S7 has a combined fuel consumption of 29.7 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "444 hp",
			},
			{
				model: "Audi S6 (C7, C8)",
				image: "Audi_S6_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S6 has a Recommended Retail Price (RRP) of £63,000.\n\nDrivetrain and Performance: The Audi S6 comes with a 2.9-liter TFSI V6 engine, producing 444 hp and 443 lb-ft of torque. It also features a 48-volt mild-hybrid system, Audi's quattro all-wheel-drive, and an 8-speed Tiptronic transmission. The S6 can sprint from 0 to 62 mph in 4.4 seconds. The top speed is electronically limited to 155 mph.\n\nFuel Efficiency: The Audi S6 has a combined fuel consumption of 30.1 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "444 hp",
			},
			{
				model: "Audi S5",
				image: "Audi_S5_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S5 has a Recommended Retail Price (RRP) of £52,000.\n\nDrivetrain and Performance: The Audi S5 is powered by a 3.0-liter TFSI V6 engine, delivering 349 hp and 369 lb-ft of torque. It comes with quattro all-wheel drive and an 8-speed Tiptronic transmission. The S5 can accelerate from 0 to 62 mph in 4.7 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi S5 has a combined fuel consumption of 31.0 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "349 hp",
			},
			{
				model: "Audi S4 (B8, B9)",
				image: "Audi_S4_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S4 has a Recommended Retail Price (RRP) of £45,000.\n\nDrivetrain and Performance: The Audi S4 is equipped with a 3.0-liter TFSI V6 engine, producing 349 hp and 369 lb-ft of torque. It features quattro all-wheel drive and an 8-speed Tiptronic transmission. The S4 can go from 0 to 62 mph in 4.9 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi S4 has a combined fuel consumption of 30.5 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "349 hp",
			},
			{
				model: "Audi S3 (8V)",
				image: "Audi_S3_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S3 has a Recommended Retail Price (RRP) of £38,000.\n\nDrivetrain and Performance: The Audi S3 features a 2.0-liter TFSI inline-4 engine, delivering 306 hp and 295 lb-ft of torque. It comes with quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The S3 can accelerate from 0 to 62 mph in 4.8 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi S3 has a combined fuel consumption of 33.6 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "306 hp",
			},
			{
				model: "Audi S1",
				image: "Audi_S1_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi S1 has a Recommended Retail Price (RRP) of £32,000.\n\nDrivetrain and Performance: The Audi S1 is powered by a 2.0-liter TFSI inline-4 engine, producing 228 hp and 273 lb-ft of torque. It features quattro all-wheel drive and a 6-speed manual transmission. The S1 can accelerate from 0 to 62 mph in 5.8 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi S1 has a combined fuel consumption of 40.4 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "228 hp",
			},
			{
				model: "Audi TT (8J, 8S)",
				image: "Audi_TT_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi TT has a Recommended Retail Price (RRP) of £35,000.\n\nDrivetrain and Performance: The Audi TT is available with multiple engine options, including a 2.0-liter TFSI inline-4 engine producing 197 hp or 245 hp. It comes with either front-wheel drive or quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The TT can accelerate from 0 to 62 mph in 5.8 seconds (245 hp version), with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi TT has a combined fuel consumption of 36.7 mpg (245 hp version). The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "197-245 hp",
			},
			{
				model: "Audi Q8",
				image: "Audi_Q8_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi Q8 has a Recommended Retail Price (RRP) of £68,000.\n\nDrivetrain and Performance: The Audi Q8 comes with a 3.0-liter TFSI V6 engine, producing 335 hp and 369 lb-ft of torque. It features quattro all-wheel drive and an 8-speed Tiptronic transmission. The Q8 can accelerate from 0 to 62 mph in 5.9 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi Q8 has a combined fuel consumption of 25.4 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "335 hp",
			},
			{
				model: "Audi Q7",
				image: "Audi_Q7_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi Q7 has a Recommended Retail Price (RRP) of £61,000.\n\nDrivetrain and Performance: The Audi Q7 is powered by a 3.0-liter TFSI V6 engine, delivering 335 hp and 369 lb-ft of torque. It features quattro all-wheel drive and an 8-speed Tiptronic transmission. The Q7 can accelerate from 0 to 62 mph in 5.9 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi Q7 has a combined fuel consumption of 25.5 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "335 hp",
			},
			{
				model: "Audi Q5",
				image: "Audi_Q5_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi Q5 has a Recommended Retail Price (RRP) of £46,000.\n\nDrivetrain and Performance: The Audi Q5 is available with multiple engine options, including a 2.0-liter TFSI inline-4 engine producing 261 hp and 273 lb-ft of torque. It comes with quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The Q5 can accelerate from 0 to 62 mph in 5.9 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi Q5 has a combined fuel consumption of 29.1 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "261 hp",
			},
			{
				model: "Audi Q3",
				image: "Audi_Q3_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi Q3 has a Recommended Retail Price (RRP) of £33,000.\n\nDrivetrain and Performance: The Audi Q3 is available with multiple engine options, including a 2.0-liter TFSI inline-4 engine producing 228 hp and 258 lb-ft of torque. It features quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The Q3 can accelerate from 0 to 62 mph in 7.3 seconds, with a top speed of 144 mph.\n\nFuel Efficiency: The Audi Q3 has a combined fuel consumption of 31.0 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "228 hp",
			},
			{
				model: "Audi Q2",
				image: "Audi_Q2_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi Q2 has a Recommended Retail Price (RRP) of £26,000.\n\nDrivetrain and Performance: The Audi Q2 is available with a 1.5-liter TFSI inline-4 engine producing 148 hp and 184 lb-ft of torque. It features front-wheel drive and a 7-speed S tronic dual-clutch transmission. The Q2 can accelerate from 0 to 62 mph in 8.6 seconds, with a top speed of 131 mph.\n\nFuel Efficiency: The Audi Q2 has a combined fuel consumption of 38.7 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "148 hp",
			},
			{
				model: "Audi A8 (D4, D5)",
				image: "Audi_A8_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi A8 has a Recommended Retail Price (RRP) of £75,000.\n\nDrivetrain and Performance: The Audi A8 comes with a 3.0-liter TFSI V6 engine, producing 335 hp and 369 lb-ft of torque. It features quattro all-wheel drive and an 8-speed Tiptronic transmission. The A8 can accelerate from 0 to 62 mph in 5.6 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi A8 has a combined fuel consumption of 27.2 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "335 hp",
			},
			{
				model: "Audi A7",
				image: "Audi_A7_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi A7 has a Recommended Retail Price (RRP) of £56,000.\n\nDrivetrain and Performance: The Audi A7 features a 3.0-liter TFSI V6 engine, delivering 335 hp and 369 lb-ft of torque. It comes with quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The A7 can accelerate from 0 to 62 mph in 5.3 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi A7 has a combined fuel consumption of 27.7 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "335 hp",
			},
			{
				model: "Audi A6 (C7, C8)",
				image: "Audi_A6_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi A6 has a Recommended Retail Price (RRP) of £45,000.\n\nDrivetrain and Performance: The Audi A6 is available with multiple engine options, including a 2.0-liter TFSI inline-4 engine producing 261 hp and 273 lb-ft of torque. It features quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The A6 can accelerate from 0 to 62 mph in 6.0 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi A6 has a combined fuel consumption of 31.8 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "261 hp",
			},
			{
				model: "Audi A5",
				image: "Audi_A5_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi A5 has a Recommended Retail Price (RRP) of £39,000.\n\nDrivetrain and Performance: The Audi A5 features a 2.0-liter TFSI inline-4 engine, delivering 261 hp and 273 lb-ft of torque. It comes with quattro all-wheel drive and a 7-speed S tronic dual-clutch transmission. The A5 can accelerate from 0 to 62 mph in 5.5 seconds, with a top speed of 155 mph (electronically limited).\n\nFuel Efficiency: The Audi A5 has a combined fuel consumption of 32.5 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "261 hp",
			},
			{
				model: "Audi A4 (B8, B9)",
				image: "Audi_A4_Image_URL",
				year: "2024",
				Desc: "Pricing: The Audi A4 has a Recommended Retail Price (RRP) of £33,000.\n\nDrivetrain and Performance: The Audi A4 is available with a 2.0-liter TFSI inline-4 engine producing 201 hp and 236 lb-ft of torque. It features front-wheel drive and a 7-speed S tronic dual-clutch transmission. The A4 can accelerate from 0 to 62 mph in 7.1 seconds, with a top speed of 130 mph.\n\nFuel Efficiency: The Audi A4 has a combined fuel consumption of 36.2 mpg. The actual fuel consumption will depend on driving conditions, driving style, and other factors.",
				FuelType: fuel,
				Power: "201 hp",
			},
			{
				model: "Audi A3 (8V)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A1",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi R8",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi RS6 Avant (C6)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi RS6 (C5)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi RS4 (B5, B7)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S8 (D3)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S6 (C5, C6)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S4 (B6, B7)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S3 (8L, 8P)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S3 (8L, 8P)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi TT (8N)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A8 (D3)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A6 (C5, C6)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A4 (B6, B7)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A3 (8L, 8P)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A2",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi RS2 Avant",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S8 (D2)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S6 (C4)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S4 (B5)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi S2",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi Cabriolet",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A8 (D2)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A6 (C4)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi A4 (B5)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi 100 (C4)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
			{
				model: "Audi 90 (B4)",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
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
				Desc: "",
				FuelType: "",
				Power: "",
			},
		],
	},
	{
		id: 3,
		make: "Toyota",
		year: "1936-",
		src: Toyota,
		imgSize: "sm",
		models: [
			{
				model: "Toyota Yaris",
				image: "",
				year: "",
				Desc: "",
				FuelType: "",
				Power: "",
			},
		],
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

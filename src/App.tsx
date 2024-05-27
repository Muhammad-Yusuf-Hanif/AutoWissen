import React from "react";
import Heading from "./components/Heading";
import CarTiles from "./components/CarTiles";
import { carsData } from "./components/cars";

const App = () => {
  console.log(carsData)
	return (
		<>
			<Heading
				className="font-medium italic m-10 animate-bounce"
				size="md"
				text="AutoWissen"
			/>
			<div className="flex flex-wrap max-w-[1248px] m-auto gap-2 justify-center">
				{carsData.map((car) => {
					return <CarTiles 
          key={car.id}
          title={car.make}
          imageSrc={car.src}
          year={car.year}
          imgSize={car.imgSize} 
          />
				})}
			</div>
		</>
	);
};

export default App;

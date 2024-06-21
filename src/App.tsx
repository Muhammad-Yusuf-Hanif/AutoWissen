import React, { useEffect } from "react";
import CarTiles from "./components/CarTiles";
import { carsData } from "./components/cars";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
	const navigate = useNavigate();

	function viewCars(path: string) {
		navigate("/make/" + path);
	}

	return (
		<>
			<Navbar />

			<div
				className="flex flex-wrap max-w-[1248px] m-auto gap-2
			justify-center"
			>
				{carsData.map((car) => {
					return (
						<CarTiles
							key={car.id}
							title={car.make}
							imageSrc={car.src}
							year={car.year}
							imgSize={car.imgSize}
							onClick={() => viewCars(`${car.make}`)}
						/>
					);
				})}
			</div>
		</>
	);
};

export default App;

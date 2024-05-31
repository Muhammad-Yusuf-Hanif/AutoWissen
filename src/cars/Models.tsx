import React from "react";
import Navbar from "../components/Navbar";
import vehiclesData from "./Models/VehiclesData.json"; // Adjust path as necessary
import VehicleTiles from "../components/VehicleTiles";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../helpers";
import { carsData } from "../components/cars";
// import imageData from "./imageData"; // Adjust path as necessary

const Models = () => {
	const { model } = useParams();
	console.log(model);
	const handleTileClick = (model: string) => {
		console.log(`Clicked on: ${model}`);
	};

	const capitalised = capitalizeFirstLetter(model);
	console.log("capitalise clg", capitalised);
	// console.log("audidata", audiData);

	const test = carsData[capitalised];

	const audiData = carsData.filter((car) => car.make === capitalised);
	console.log("audiData", audiData[0].models);
	// console.log(bmwCars);
	return (
		<>
			<Navbar />
			<div>
				<h1 className="flex text-2xl justify-center">
					Welcome to {model} - Home of {model} information!
				</h1>
			</div>
			<div className="p-4 max-w-4xl mx-auto">
				{audiData[0].models?.map((model) => {
					return <VehicleTiles model={model.model} />;
				})}
				{/* {audiData[0].models.map(([decade, models], decadeIndex) => (
					<div key={decadeIndex} className="mb-6">
						<h2 className="text-2xl font-bold mb-4">{decade}</h2>
						<div className="flex flex-col">
							{models &&
								models?.map((model, modelIndex) => (
									<VehicleTiles
										key={modelIndex}
										model={model}
										onClick={() => handleTileClick(model)}
										className="w-full mb-4"
										// imageSrc={imageData[model]} // Pass the image URL from imageData
									/>
								))}
						</div>
					</div>
				))} */}
			</div>
		</>
	);
};

export default Models;

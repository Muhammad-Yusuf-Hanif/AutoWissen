import React from "react";
import Navbar from "../components/Navbar";
import VehicleTiles from "../components/VehicleTiles";
import { useNavigate, useParams } from "react-router-dom";
import { capitalizeFirstLetter, Car, CarModel } from "../helpers";
import { carsData } from "../components/cars";

const Models: React.FC = () => {
	const params = useParams<{ model?: string }>();
	const navigate = useNavigate();
	const model = params.model;

	const handleTileClick = (selectedModel: string) => {
		const modelPath = `/models/${selectedModel
			.replace(/\s+/g, "-")
			.toLowerCase()}`;
		navigate(modelPath);
		console.log(`Navigating to: ${modelPath}`);
	};

	const capitalised = model ? capitalizeFirstLetter(model) : "";

	const carData: Car[] = carsData.filter((car) => car.make === capitalised);

	return (
		<>
			<Navbar />
			<div>
				<h1 className="flex text-2xl justify-center">
					Welcome to {capitalised} - Home of {capitalised} information!
				</h1>
			</div>
			<div className="p-4 max-w-4xl mx-auto">
				{carData.length > 0 ? (
					carData[0].models.map((selectedModel: CarModel, modelId: number) => (
						<VehicleTiles
							key={modelId}
							model={selectedModel.model}
							onClick={() => handleTileClick(selectedModel.model)}
						/>
					))
				) : (
					<p>No models found for {capitalised}.</p>
				)}
			</div>
		</>
	);
};

export default Models;

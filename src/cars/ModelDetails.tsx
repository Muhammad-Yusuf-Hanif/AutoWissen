import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { carsData } from "../components/cars";

const ModelDetails = () => {
	const { model } = useParams();

	// Find the car model details based on the URL parameter
	const selectedModel = carsData
		.flatMap((car) => car.models)
		.find(
			(carModel) => carModel.model.replace(/\s+/g, "-").toLowerCase() === model
		);

	if (!selectedModel) {
		return <div>Model not found</div>;
	}

	if (selectedModel.Desc === "") {
		return (
			<>
				<Navbar />
				<div className="flex justify-center m-5 text-3xl text-emerald-600 animate-bounce">
					Sorry, no Model Details added yet!
				</div>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<div className="p-4 max-w-3xl mx-auto">
				<h1 className="text-2xl font-bold">{selectedModel.model}</h1>
				<p>Year: {selectedModel.year}</p>
				<div className="border rounded-xl">
					{selectedModel.image && (
						<img src={selectedModel.image} alt={selectedModel.model} />
					)}
				</div>
				<h2 className="my-3">Vehicle Specs</h2>
				<div className="flex flex-col my-3 border w-max-[40%]">
					<h2>Power : {selectedModel.Power}</h2>
					<h2 className="flex gap-3">
						Fuel Type :{" "}
						<img className="w-[30px]" src={selectedModel.FuelType} />{" "}
					</h2>
				</div>
				<h2 className="my-2 font-sans">
					Vehicle Details - {selectedModel.Desc}
				</h2>
			</div>
		</>
	);
};

export default ModelDetails;

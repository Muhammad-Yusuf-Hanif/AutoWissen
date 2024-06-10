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
			<div className="m-6 max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold">{selectedModel.model}</h1>
				<h2 className="font-bold">Year : {selectedModel.year}</h2>
				<div className="border rounded-xl max-w-[70%] max-h-[480px] overflow-hidden">
					{selectedModel.image && (
						<img
							src={selectedModel.image}
							alt={selectedModel.model}
							className="w-full h-auto"
						/>
					)}
				</div>
				<h2 className="my-3 font-bold text-[18px]">Vehicle Specs</h2>
				<div className="flex flex-col my-3 border rounded-md max-w-[20%]">
					<h2> Power : {selectedModel.Power}</h2>
					<h2 className="flex gap-1">
						Fuel Type :{" "}
						<img className="w-[30px]" src={selectedModel.FuelType} alt="" />{" "}
					</h2>
				</div>
				<h1 className="font-bold text-[18px]">Vehicle Details </h1>
				<h2 className="my-2 font-sans" style={{ whiteSpace: "pre-line" }}>
					{selectedModel.Desc}
				</h2>
			</div>
		</>
	);
};

export default ModelDetails;

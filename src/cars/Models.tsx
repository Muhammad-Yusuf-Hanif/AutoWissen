import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VehicleTiles from "../components/VehicleTiles";
import { useNavigate, useParams } from "react-router-dom";
import { capitalizeFirstLetter, Car, CarModel } from "../helpers";
import { carsData } from "../components/cars";

type vehData = {
	Make: string;
	Model: string;
	objectId: string;
	Year: string;
};

const Models: React.FC = () => {
	const [vehData, setVehData] = useState<vehData[]>([]);
	const params = useParams<{ model?: string }>();
	const navigate = useNavigate();
	const model = params.model;

	useEffect(() => {
		const where = encodeURIComponent(
			JSON.stringify({
				Make: {
					$exists: true,
				},
				Model: {
					$exists: true,
				},
				Category: {
					$exists: true,
				},
				Year: {
					$exists: true,
				},
			})
		);
		const response = fetch(
			`https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_${model}?count=1&limit=100&where=${where}`,
			{
				headers: {
					"X-Parse-Application-Id": "9vxZ3eFRKsCPFvU6KYtj6tdRgEI52Ytdk9MlLkfU", // This is your app's application id
					"X-Parse-REST-API-Key": "33rwHOTADO1ZTTEEYeLrrip6GYWDyK7rd8YUw23S", // This is your app's REST API key
				},
			}
		);
		response
			.then((data) => {
				return data.json();
			})
			.then((resData) => {
				setVehData(resData.results);
			});
	}, []);

	const handleTileClick = (selectedModel: string) => {
		const modelPath = `/models/${selectedModel
			.replace(/\s+/g, "-")
			.toLowerCase()}`;
		navigate(modelPath);
		console.log(`Navigating to: ${modelPath}`);
	};

	console.log("vehData", vehData);

	return (
		<>
			<Navbar />
			<div>
				<h1 className="flex text-2xl justify-center">
					Welcome to - Home of information!
				</h1>
			</div>
			<div className="p-4 max-w-4xl mx-auto">
				{vehData.length > 0 ? (
					vehData.map((Car) => {
						return (
							<VehicleTiles
								key={Car.objectId}
								model={Car.Model}
								onClick={() => handleTileClick(Car.Model)}
								Year={Car.Year}
							/>
						);
					})
				) : (
					<p>No models found.</p>
				)}
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Audi_S7_Sportback_4.0_TFSI_quattro_S_tronic.JPG/300px-Audi_S7_Sportback_4.0_TFSI_quattro_S_tronic.JPG" />
			</div>
		</>
	);
};

export default Models;

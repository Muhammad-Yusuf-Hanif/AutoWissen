import React from "react";
import Navbar from "../components/Navbar";
import vehiclesData from "../cars/Models/VehiclesData.json"; // Adjust path as necessary
import VehicleTiles from "../components/VehicleTiles";
// import imageData from "./imageData"; // Adjust path as necessary

const Audi = () => {
  const handleTileClick = (model: string) => {
    console.log(`Clicked on: ${model}`);
  };

  const audiData = vehiclesData["Audi"].models;

  return (
    <>
      <Navbar />
      <div>
        <h1 className="flex text-2xl justify-center">Welcome to Audi Cars - Vorsprung Durch Technik</h1>
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        {Object.entries(audiData).map(([decade, models], decadeIndex) => (
          <div key={decadeIndex} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{decade}</h2>
            <div className="flex flex-col">
              {models.map((model, modelIndex) => (
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
        ))}
      </div>
    </>
  );
};

export default Audi;

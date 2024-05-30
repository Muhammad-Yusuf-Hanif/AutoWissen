import React from "react";
import Navbar from "../components/Navbar";
import audiModels from "./Models/AudiModels.json";
import ModelTiles from "../components/ModelTiles"; // Adjust the path as necessary

const Audi = () => {
  const handleTileClick = (model: string) => {
    // Handle the click event, e.g., navigate to a details page or show a modal
    console.log(`Clicked on: ${model}`);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to Audi Cars - Vorsprung Deutsch Technik</h1>
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        {audiModels.AudiModelsSince1985.reverse().map((decadeData, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{decadeData.decade}</h2>
            <div className="flex flex-wrap justify-start">
              {decadeData.models.map((model, modelIndex) => (
                <ModelTiles
                  key={modelIndex}
                  model={model}
                  onClick={() => handleTileClick(model)}
                  // You can add an imageSrc prop here if you have images
                  // imageSrc={`/path/to/images/${model}.jpg`}
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

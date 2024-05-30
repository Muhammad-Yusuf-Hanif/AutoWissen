import React from "react";

type ModelTilesProps = {
  model: string;
  onClick: () => void;
  imageSrc?: string; // Optional, in case you want to display an image
};

const ModelTiles: React.FC<ModelTilesProps> = ({ model, onClick, imageSrc }) => {
  return (
    <div
      className="flex flex-col items-center p-4 m-2 border rounded cursor-pointer hover:shadow-md"
      onClick={onClick}
    >
      {imageSrc && <img src={imageSrc} alt={model} className="w-full h-32 object-cover mb-2" />}
      <h3 className="text-lg font-medium">{model}</h3>
    </div>
  );
};

export default ModelTiles;

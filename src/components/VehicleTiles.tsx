import React from "react";

type VehicleTilesProps = {
	model: string;
	onClick: () => void;
	className?: string;
	imageSrc?: string;
	Year: string;
};

const VehicleTiles: React.FC<VehicleTilesProps> = ({
	model,
	onClick,
	className,
	imageSrc,
	Year,
}) => {
	console.log('model', model)
	return (
		<div
			className={`flex flex-col items-center p-4 m-2
      border rounded cursor-pointer hover:shadow-md ${className}`}
			onClick={onClick}
		>
			{imageSrc && (
				<img
					src={imageSrc}
					alt={model}
					className="w-full h-32 object-cover mb-2"
				/>
			)}
			<h3 className="text-lg font-medium">{model} {`(${Year})`}</h3>
		</div>
	);
};

export default VehicleTiles;

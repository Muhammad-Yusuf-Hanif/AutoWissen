import React from "react";

type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	title: string;
	additionalClasses?: string;
	size?: "sm" | "md";
	imageSrc?: string;
	year: string;
	imgSize?: "sm" | "md" | "lg";
};

const CarTiles = ({
	title,
	additionalClasses,
	size,
	imageSrc,
	year,
	imgSize,
	...rest
}: Props) => {
	const small = "p-20 mt-1 text-sm min-w-[60px]";
	const medium = "px-4 mt-2 min-w-[160px] min-h-[150px]";
	const imgSM = { width: "60px", height: "55px" };
	const imgMD = { width: "120px", height: "38px" };
	const imgLG = { width: "70px", height: "50px" };

	return (
		<button
			className={`hover:scale-95 duration-500 hover:shadow-md font-bold border-2 w-1/6 ${additionalClasses} ${
				size === "sm" ? small : medium
			}`}
			{...rest}
		>
			<div className="flex flex-col items-center">
				{imageSrc && (
					<img
						style={imgSize === "sm" ? imgSM : imgSize === "md" ? imgMD : imgLG}
						src={imageSrc}
						alt={title + " logo image"}
						className="w-full h-auto mb-2 rounded-md"
					/>
				)}
				<div className="text-center">
					<div className="font-bold text-lg mb-1">{title}</div>
					<div className="text-sm">{year}</div>
				</div>
			</div>
		</button>
	);
};

export default CarTiles;

// This is a reusable component that was created to display text for all vehicle
// tiles displayed in the homepage

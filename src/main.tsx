import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Audi from "./cars/Models.tsx";
import Volkswagen from "./cars/Volkswagen.tsx";
import BMW from "./cars/BMW.tsx";
import Toyota from "./cars/Toyota.tsx";
import Ford from "./cars/Ford.tsx";
import Mercedes from "./cars/Mercedes.tsx";
import Volvo from "./cars/Volvo.tsx";
import Skoda from "./cars/Skoda.tsx";
import Vauxhall from "./cars/Vauxhall.tsx";
import Honda from "./cars/Honda.tsx";
import Seat from "./cars/Seat.tsx";
import Cupra from "./cars/Cupra.tsx";
import Models from "./cars/Models.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/models/:model",
		element: <Models />,
	},
	// {
	// 	path: "/Audi",
	// 	element: <Audi />,
	// },
	// {
	// 	path: "/Volkswagen",
	// 	element: <Volkswagen />,
	// },
	// {
	// 	path: "/BMW",
	// 	element: <BMW />,
	// },
	// {
	// 	path: "/Toyota",
	// 	element: <Toyota />,
	// },
	// {
	// 	path: "/Ford",
	// 	element: <Ford />,
	// },
	// {
	// 	path: "/Mercedes",
	// 	element: <Mercedes />,
	// },
	// {
	// 	path: "/Volvo",
	// 	element: <Volvo />,
	// },
	// {
	// 	path: "/Skoda",
	// 	element: <Skoda />,
	// },
	// {
	// 	path: "/Vauxhall",
	// 	element: <Vauxhall />,
	// },
	// {
	// 	path: "/Honda",
	// 	element: <Honda />,
	// },
	// {
	// 	path: "/Seat",
	// 	element: <Seat />,
	// },
	// {
	// 	path: "/Cupra",
	// 	element: <Cupra />,
	// },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

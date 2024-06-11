import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Models from "./cars/Models";
import ModelDetails from "./cars/ModelDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/make/:model",
		element: <Models />,
	},
	{
		path: "/models/:model", 
		element: <ModelDetails />,
	},
]);

export default router
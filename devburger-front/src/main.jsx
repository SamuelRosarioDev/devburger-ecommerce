import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import GlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={routers}/>
		<GlobalStyles/>
		<ToastContainer theme="dark"/>
	</StrictMode>,
);

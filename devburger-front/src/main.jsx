import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import { routers } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppProvider>
			<Elements stripe={stripePromise}>
				<RouterProvider router={routers} />
			</Elements>
			<GlobalStyles />
			<ToastContainer theme="dark" />
		</AppProvider>
	</StrictMode>,
);

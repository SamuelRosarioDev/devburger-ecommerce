import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import GlobalStyles from "./styles/globalStyles";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/stardard";
import { Router } from "./routes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<Elements stripe={stripePromise}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Elements>
				<GlobalStyles />
				<ToastContainer theme="dark" />
			</AppProvider>
		</ThemeProvider>
	</StrictMode>,
);
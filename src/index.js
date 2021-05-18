import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import apolloClient from "./Client";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</StrictMode>,
	rootElement
);

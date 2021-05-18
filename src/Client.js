import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
const client = new ApolloClient({
	uri: "https://countries.trevorblades.com/",
	cache: new InMemoryCache(),
});

export default client;

export const COUNTRY_QUERY = gql`
	query {
		country(code: "AD") {
			code
			name
			capital
			native
			phone
			currency
			emoji
			emojiU
		}
	}
`;

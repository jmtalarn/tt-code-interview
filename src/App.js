/*
  Create a list component (see ./example.png) that can 
  display label/value data. 
  
  Please fetch countries data from https://countries.trevorblades.com/ API.

  Component interface:

  interface List {
    striped?: boolean
    columns?: 1 | 2 
    items: { label: string, value: string}[]
  }

  — consumer of the component should be able to define 
    if the rows are striped with a grey background. 
  — component should allow setting the number of 
    columns - 1 or 2
  — component should arrange items from top to bottom 
    and then to the next column. 
*/

import { useQuery } from "@apollo/client";
import List from "./List";
import { COUNTRY_QUERY } from "./Client";

import "./styles.css";

const parseData = (data) => {
	const { __typename, ...country } = data;
	const result = [];
	for (let key of Object.keys(country)) {
		result.push({ label: key, value: country[key] });
	}
	return result;
};

const App = () => {
	const { loading, error, data } = useQuery(COUNTRY_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error {error} </p>;

	const items = parseData(data.country);

	return (
		<div className="App">
			<List items={items} columns={2} striped={true} />
		</div>
	);
};

export default App;

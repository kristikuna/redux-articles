// src/js/components/App.jsx
import React from "react";
import List from "./List.jsx";
import ListTwo from "./ListTwo.jsx";
import Form from "./Form.jsx";

const App = () => (
	<div className="row mt-5">
		<div className="col-md-4 offset-md-1">
			<h2>Articles</h2>
			<List />
			<h2>Articles 2</h2>
			<ListTwo />
		</div>
		<div className="col-md-4 offset-md-1">
			<h2>Add a new article</h2>
			<Form />
		</div>
	</div>
);
export default App;
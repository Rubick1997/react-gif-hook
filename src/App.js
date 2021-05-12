import React from "react";
import "./App.css";
import RandomV1 from "./components/RandomV1";
import TagV1 from "./components/TagV1";

function App() {
	return (
		<div>
			<h1>Random GIF Application</h1>
			<div className='main-container'>
				<RandomV1 />
				<TagV1 />
			</div>
		</div>
	);
}

export default App;

import React from "react";
import "./App.css";
import RandomV1 from "./components/RandomV1";
import RandomV2 from "./components/RandomV2";
import TagV1 from "./components/TagV1";
import TagV2 from "./components/TagV2";

function App() {
	return (
		<div>
			<h1>Random GIF Application</h1>
			<div className='main-container'>
				<RandomV2/>
				<TagV2/>
				<RandomV1 />
				<TagV1 />
			</div>
		</div>
	);
}

export default App;

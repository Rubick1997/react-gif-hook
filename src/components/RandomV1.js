import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY} from "../apiKey"


function RandomV1() {
	useEffect(() => {
		const fetchGif = async () => {
			const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
			const {data} = await axios.get(url);
            console.log(data)
		};
        fetchGif()
	}, []);

	return (
		<>
			<h1>Random</h1>
		</>
	);
}

export default RandomV1;

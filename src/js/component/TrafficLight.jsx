import React from "react";
import { useState, useEffect } from "react";

//create component
const TrafficLight = (props) => {
	const [colorOne, setColorOne] = useState("Gray");
	const [colorTwo, setColorTwo] = useState("Gray");
	const [colorThree, setColorThree] = useState("Gray");
	
	function redColor () {
		if (colorOne=="Gray") {setColorOne("Red")}
		else{setColorOne("Gray")}
		}
	function yellowColor () {
		if (colorTwo=="Gray") {setColorTwo("Yellow")}
		else{setColorTwo("Gray")}
		}
	function greenColor () {
		if (colorThree=="Gray") {setColorThree("Green")}
		else{setColorThree("Gray")}
		}

	
	return (
		<div className="Container">
			<div className={`${colorOne}`} onClick={redColor}></div>
			<div className={`${colorTwo}`} onClick={yellowColor}></div>
			<div className={`${colorThree}`} onClick={greenColor}></div>
		</div>
	);
};

export default TrafficLight;

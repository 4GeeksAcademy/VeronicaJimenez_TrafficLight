import React from "react";
import { useState } from "react";

//create component
const TrafficLight = (props) => {
	const [colorOne, setColorOne] = useState("Gray");
	const [colorTwo, setColorTwo] = useState("Gray");
	const [colorThree, setColorThree] = useState("Gray");
	
	function redColor () {
		if (colorOne=="Gray") {
			setColorOne("Red")
			setColorTwo("Gray")
			setColorThree("Gray")
		}
		else{setColorOne("Gray")}
		}
	function yellowColor () {
		if (colorTwo=="Gray") {
			setColorOne("Gray")
			setColorTwo("Yellow")
			setColorThree("Gray")
		}
		else{setColorTwo("Gray")}
		}
	function greenColor () {
		if (colorThree=="Gray") {
			setColorOne("Gray")
			setColorTwo("Gray")
			setColorThree("Green")
		}
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

import React from "react";
import Card from "./Card";

const Cards = (props) => {
	return (
		<div className="row mt-5">
			<Card content={props.cardInfo[0]} />
			<Card content={props.cardInfo[1]} />
			<Card content={props.cardInfo[2]} />
			<Card content={props.cardInfo[3]} />
		</div>
	);
};

export default Cards;

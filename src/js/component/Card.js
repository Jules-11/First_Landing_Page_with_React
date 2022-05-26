import React from "react";

const Card = (props) => {
	const cardStyle = {
		width: "18 rem",
	};
	return (
		<div className="col-12 col-sm-3">
			<div className="card border" style={cardStyle}>
				<img
					src={props.content.imageUrl}
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">{props.content.title}</h5>
					<p className="card-text">{props.content.description}</p>
					<div className="text-end">
						<a href="#" className="btn btn-dark ">
							{props.content.button}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

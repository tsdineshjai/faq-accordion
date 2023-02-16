import React from "react";

function Question({question}) {
	const [hide, setHide] = React.useState(false);

	const handleClick = () => {
		setHide((prev) => !prev);
	};
	return (
		<div className="accordion-expand">
			<div className="accordion-question">
				<span> {question.title}</span>
				<button onClick={handleClick}>{hide ? "-" : "+"}</button>
			</div>
			{hide && <p>Ans: {question.info}</p>}
		</div>
	);
}

export default Question;

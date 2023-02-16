import React from "react";
import Question from "./Question";

function App() {
	return (
		<div className="accordian-container">
			<h3>Frequently Asked Questions</h3>
			{questions.map((question) => {
				return <Question key={question.id} question={question} />;
			})}
		</div>
	);
}

export default App;

const questions = [
	{
		id: 1,
		title: "Is this a good product?",
		info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
	},
	{
		id: 2,
		title: "How much does it cost?",
		info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
	},
	{
		id: 3,
		title: "When can I get it?",
		info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
	},
];

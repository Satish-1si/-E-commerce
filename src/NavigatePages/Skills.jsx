import { Link } from "react-router-dom";

export const Skills = () => {
	return (
		<div className="flex  flex-col justify-center items-center">
			<h1>SkillsPage</h1>
			<button className="bg-green-500 w-36 mt-3 h-10 ">
				<Link to="/">Back to Home...</Link>
			</button>
		</div>
	);
};

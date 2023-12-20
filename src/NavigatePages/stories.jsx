import { Link } from "react-router-dom";

export const Stories = () => {
	return (
		<div className="flex  flex-col justify-center items-center">
			<h1>Stories Page</h1>
			<button className="bg-red-700 w-36 mt-3 h-10 ">
				<Link to="/">Back to Home...</Link>
			</button>
		</div>
	);
};

import { Link } from "react-router-dom";

export const Shop = () => {
	return (
		<div className="flex  flex-col justify-center items-center">
			<h1>Shop Page</h1>
			<button className="bg-pink-600 w-36 mt-3 h-10 ">
				<Link to="/">Back to Home...</Link>
			</button>
		</div>
	);
};

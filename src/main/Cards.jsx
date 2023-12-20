import { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../cssStyles/Cards.css";
import { Api } from "./ContextApi";
import { v4 } from "uuid";

export const Card = () => {
	let { state } = useContext(Api);
	const UpdateHeart = (event) => {
		event.target.style.color === ""
			? (event.target.style.color = "#e91e63")
			: (event.target.style.color = "");
	};

	return (
		<div className="cardsContainer">
			{state.fetchData.map(({ title, price, image }) => {
				return (
					<div className="card" key={v4()}>
						<img src={image} alt="pic not found @ 22" />

						<div className="cardsContent">
							<p className="font-medium">{title}</p>
							<h1 className="font-bold text-black-600">
								<span className="font-bold"> ${price}</span>
							</h1>
							<div className="paragraph-heart">
								<p>
									<span>SIGN IN</span> || Create Account to
									see price...
								</p>
								<FavoriteIcon onClick={UpdateHeart} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

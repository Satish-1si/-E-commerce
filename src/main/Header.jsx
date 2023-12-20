import "../cssStyles/Header.css";
import Logo from "../aserts/images/Logo.png";
import { Icons } from "../aserts/iconsStorage/icons.jsx";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";


const Strip = () => {
	return (
		<div className="strip">
			<li>Lorem ipsum dolor</li>
			<li>Lorem ipsum dolor</li>
			<li>Lorem ipsum dolor</li>
		</div>
	);
};
const FirstContainer = () => {
	return (
		<div className="sub_container-1">
			<Link to="/"><img src={Logo} alt="img not found @ 16" /></Link>
			<h1 className="LogoHeading">Logo</h1>
			<div className="LogoContainer">
				{Icons.search}
				
				<h1>{<FavoriteIcon/>}<sup className="minus">0</sup></h1>
				{Icons.person}
				{Icons.cart}
				<select className="showContries">
					<optgroup label="countries">
						<option>Eng</option>
						<option>Tel</option>
						<option>Hin</option>
					</optgroup>
				</select>
			</div>
		</div>
	);
};
const SecondContainer = () => {
	return (
		<div className="sub_container-2">
			<li className="link-1"><Link to="/shop">shop</Link></li>
			<li className="link-2"><Link to="/skills">Skills</Link></li>
			<li className="link-3"><Link to="/stories">Stores</Link></li>
			<li className="link-4"><Link to="/about">About</Link></li>
			<li className="link-5"><Link to="/contracts">Contract-Us</Link></li>
			
		</div>
	);
};

export const Header = () => {
	return (
		<div className="header">
			<Strip />
			<>
				<FirstContainer />
				<SecondContainer />
			</>
		</div>
	);
};

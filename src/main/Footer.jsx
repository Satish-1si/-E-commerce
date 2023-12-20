import "../cssStyles/Footers.css";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let addressList = {
	Cards: [
		<h1>mettā muse</h1>,
		"About Us",
		"Stories",
		"Artisans",
		"Boutiques",
		"Contact Us",
		"EU Compliances Docs",
		"Join as a Seller",
	],
	Page_links: [
		<h1>Quick Links</h1>,
		"Orders & Shipping",
		"Join/Login as a Seller",
		"Payment & Pricing",
		"Return & Refunds",
		"FAQs",
		"Privacy Policy",
		"Terms & Conditions",
	],
};

const Section1 = () => {
	return (
		<div className="Box-1">
			<h1 className="text-lg">Be the first to know</h1>
			<p>Sign up for updates from mettā muse.</p>
			<div className="section1_Container">
				<input type="text" />
				<button>Subcribe</button>
			</div>
		</div>
	);
};
const Section2 = () => {
	return (
		<div className="Box-2">
			<h1>CONTACT US</h1>
			<h3>+44 221 133 5360</h3>
			<h3>customercare@mettamuse.com</h3>
			<h3>Currency</h3>
			<p>
				Transactions will be completed in Euros and a currency reference
				is available on hover.
			</p>
		</div>
	);
};
const Section3 = () => {
	return (
		<ul className="Box-3">
			{addressList.Page_links.map((item) => {
				return (
					<li className="LinksTag" key={v4()}>
						{item}
					</li>
				);
			})}
		</ul>
	);
};
const Section4 = () => {
	return (
		<ul className="Box-3">
			{addressList.Cards.map((item) => {
				return (
					<li className="LinksTag" key={v4()}>
						{item}
					</li>
				);
			})}
		</ul>
	);
};
const Section5 = () => {
	return (
		<div>
			<h1>Follow Us</h1>
			<div className="payicons5">
				<li>
					<FontAwesomeIcon icon="fa-brands fa-facebook" />
				</li>
				<li>
					<FontAwesomeIcon icon="fa-brands fa-instagram" />
				</li>
			</div>
		</div>
	);
};
const Section6 = () => {
	return (
		<div className="payiconsContainer">
			<Section5 />
			<div>
				<h1>mettā muse Accepts</h1>
				<div className="payicons">
					<li>
						<FontAwesomeIcon icon="fa-brands fa-google-pay" />
					</li>
					<li>
						{" "}
						<FontAwesomeIcon icon="fa-brands fa-paypal" />
					</li>
					<li>
						<FontAwesomeIcon
							icon="fa-brands fa-cc-mastercard"
							style={{ color: "#d38517" }}
						/>
					</li>
					<li>
						<FontAwesomeIcon icon="fa-brands fa-cc-amex" />
					</li>
					<li>
						<FontAwesomeIcon icon="fa-brands fa-apple-pay" />
					</li>
					<li>
						<FontAwesomeIcon icon="fa-brands fa-cc-amazon-pay" />
					</li>
				</div>
			</div>
		</div>
	);
};
export const Footer = () => {
	return (
		<div className="FooterContainer">
			<div className="topsectionFooter">
				<Section1 />
				<Section2 />
			</div>
			<hr></hr>
			<div className="BottomsectionFooter">
				<Section3 />
				<Section4 />
				<Section6 />
			</div>
		</div>
	);
};

import "../cssStyles/FilterBar.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext } from "react";
import { Api } from "./ContextApi";
import { DropDown } from "./DropDown";

const FilterBar = () => {
	let { state, dispatch } = useContext(Api);
	return (
		<>
			<hr></hr>
			<div className="FilterContainer">
				<ul className="HideBar">
					<li className="TotalItems">{`${state.fetchData.length} Items`}</li>
					<li
						className="HideFilter"
						onClick={() =>
							dispatch({ type: "toggle", payload: !state.toggle })
						}
					>
						<span>
							<ChevronRightIcon />
						</span>
						HideFilter
					</li>
				</ul>
				<div className="Recommended">
					<DropDown />
				</div>
			</div>
			<hr></hr>
		</>
	);
};
export default FilterBar;

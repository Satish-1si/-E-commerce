import { Description } from "./Description";
import FilterBar from "./FiltersBar.jsx";
import { CardAndFilter } from "./CardsAndFilterOptions.jsx";
import { ContextApi } from "./ContextApi.jsx";
import { Footer } from "./Footer.jsx";
export const BuildPage = () => {
	return (
		<>
			<ContextApi>
			        <hr style={{ borderTop: '0.1px solid rgb(223, 219, 219)', margin: '5px 0' }} />
					<Description />
			        <hr style={{ borderTop: '0.1px solid rgb(223, 219, 219)', margin: '5px 0' }} />
					<FilterBar />
			        <hr style={{ borderTop: '0.1px solid rgb(223, 219, 219)', margin: '5px 0' }} />
					<CardAndFilter />
					<Footer/>
			</ContextApi>
		</>
	);
};

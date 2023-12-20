import "../cssStyles/Card_Filter.css";
import { v4 as uuidv4 } from "uuid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Card } from "./Cards";
import { useContext } from "react";
import { Api } from "./ContextApi";

const SortOptionsDetails = [
  "occasion",
  "work",
  "fabric",
  "segment",
  "suitable for",
  "raw materials",
  "Pattern",
];

const FirstSideBar = () => {
  return (
    <div className="filter">
      {SortOptionsDetails.map((item) => (
        <div key={uuidv4()} className="SortBlock">
          <div className="SubBlock">
            <span>{item}</span>
            <ChevronRightIcon className="mr-3" />
          </div>
          <h6>All</h6>
        </div>
      ))}
      <hr />
    </div>
  );
};

export const CardAndFilter = () => {
  let { state } = useContext(Api);

  return (
    <div className={state.toggle ? "CardAndFilter" : "CardsContainer"}>
      {state.toggle && <FirstSideBar />}
      <div className="sideBar">
        <Card />
      </div>
    </div>
  );
};

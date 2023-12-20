import "../cssStyles/Dropdown.css"
import { Api } from "./ContextApi";
import { useContext } from "react";

export const DropDown = () => {
    let { state, dispatch } = useContext(Api);
    let UpadateCard=(event)=>{
          if(event.target.value==="Low_To_High"){
            let data= state.fetchData.sort((item1,item2)=>(item1.price>item2.price)?1:-1)
            dispatch({ type: "fetchData", payload: data });
          }
          else if(event.target.value==="High_To_Low"){
            let data= state.fetchData.sort((item1,item2)=>(item1.price<item2.price)?1:-1)
            dispatch({ type: "fetchData", payload: data });
          }
          else if(event.target.value==="Newest"){
            let data= state.fetchData.sort((item1,item2)=>(item1.id>item2.id)?1:-1)
            dispatch({ type: "fetchData", payload: data });
          }
          else if(event.target.value==="Popular"){
            let data= state.fetchData.sort((item1,item2)=>(item1.id<item2.id)?1:-1)
            dispatch({ type: "fetchData", payload: data });
          }
          
    }
	return (
        <div>
             <select id="otpgroup" onClick={UpadateCard}>
               <option value="Newest">Newest</option>
               <option value="Popular">Popular</option>
               <option value="High_To_Low">High to Low</option>
               <option value="Low_To_High">Low to High</option>
             </select>

        </div>
	);
};

import React, {
	createContext,
	useReducer,
	useEffect,
	useCallback,
} from "react";

export const Api = createContext();

export const initialState = {
	loading: false,
	isError: { status: false, msg: "" },
	fetchData: [],
	toggle: true,
	Likescount:0
};

const reducerFunction = (previousState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "loading":
			return { ...previousState, loading: payload };
		case "isError":
			return { ...previousState, isError: payload };
		case "fetchData":
			return { ...previousState, fetchData: payload };
		case "toggle":
			return { ...previousState, toggle: payload };
		default:
			return previousState;
	}
};

export const ContextApi = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, initialState);

	const getData = useCallback(async (api) => {
		dispatch({ type: "loading", payload: true });
		dispatch({ type: "isError", payload: { status: false, msg: "" } });

		try {
			const jsonData = await fetch(api);

			if (!jsonData.ok) {
				dispatch({
					type: "isError",
					payload: {
						status: true,
						msg: "Network response was not ok",
					},
				});
			} else {
				const data = await jsonData.json();
				dispatch({ type: "fetchData", payload: data });
			}
		} catch (error) {
			dispatch({
				type: "isError",
				payload: { status: true, msg: "Something went wrong!!!" },
			});
		} finally {
			dispatch({ type: "loading", payload: false });
		}
	}, []);

	useEffect(() => {
		getData("https://fakestoreapi.com/products");
	}, [getData]);

	const contextValue = { state, dispatch, getData };
	return <Api.Provider value={contextValue}>
		          {children}
				  
		</Api.Provider>;
};

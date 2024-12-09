import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer";
export const DataContext = createContext();
// const [state, dispatch] = useReducer(reducer, initialState);
export const DataProvider = ({ children,reducer,initialState }) => {
	return (
		<DataContext.Provider value={useReducer(reducer,initialState)}>{children}</DataContext.Provider>
	);
};

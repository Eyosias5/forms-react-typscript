import { createContext, useContext, useReducer } from "react";
import React from "react";

export const initialValues = {
  enquiryData: {},
  createStep: (FormData: {}) => {},
  patchStep: (FormData: {}) => {},
};

type Action = { type: "create" | "patch"; payload: {} };
type State = { enquiryData: {} };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "create":
      console.log("Im in step 1");
      return { enquiryData: action.payload };
    case "patch":
      return { enquiryData: { ...state.enquiryData, ...action.payload } };
    default:
      return state;
  }
};

const EnquiryContext = createContext(initialValues);

export const EnquiryProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  return (
    <EnquiryContext.Provider
      value={{
        enquiryData: state.enquiryData,
        createStep: (formData: {}) =>
          dispatch({ type: "create", payload: formData }),
        patchStep: (formData: {}) =>
          dispatch({ type: "patch", payload: formData }),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  return useContext(EnquiryContext);
};

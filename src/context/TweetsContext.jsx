import { createContext } from "react";
import { getLocalStorage } from "../utils/getLocalStorage";

export const TwContext = createContext({});
const tweets = getLocalStorage("my-tweets");
export const TweetsContext = ({ children }) => (
  <TwContext.Provider value={tweets}>{children}</TwContext.Provider>
);

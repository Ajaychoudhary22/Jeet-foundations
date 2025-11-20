import { createContext } from "react";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
});

export default LanguageContext;

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { DICT } from "./LangPack";

// Create context
const LangCtx = createContext({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

// Provider component
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = DICT[lang]._meta.dir || "ltr";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

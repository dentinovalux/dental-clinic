import React, { createContext, useContext, useMemo, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { DICT } from "./LangPack";
import { useLang } from "./LangContext";

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="relative">
      {/* Language Switcher */}
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="appearance-none pl-9 pr-2 py-2 rounded-2xl shadow ring-1 ring-gray-200 bg-white/70 backdrop-blur text-sm hover:bg-white transition w-20"
      >
        {Object.entries(DICT).map(([code, v]) => (
          <option key={code} value={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </select>

      <Globe className="w-4 h-4 absolute left-3 top-2.5" />
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { DICT } from "./language/LangPack";
import { useLang } from "./language/LangContext";
import { LangSwitcher } from "./language/LangSwitcher";
import { Home, Info, Briefcase, Phone} from "lucide-react";

export default function Navbar() {
  const { lang } = useLang();
  const LANGUAGE = DICT[lang].nav;

  const linkClasses =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300";

  return (
    <nav className="bg-white shadow-md py-1 px-1 flex justify-center space-x-4 sticky top-0 z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        <Home size={22} alt={LANGUAGE.home}/>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        <Info size={22} alt={LANGUAGE.about}/>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        <Briefcase size={22} alt={LANGUAGE.services}/>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        <Phone size={22} alt={LANGUAGE.contact}/>
      </NavLink>
      <LangSwitcher />
    </nav>
  );
}

import { DICT } from "../components/language/LangPack";
import { useLang } from "../components/language/LangContext";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function Home() {
  const { lang } = useLang();
  const LANGUAGE = DICT[lang].home;
  const seo = DICT[lang].seo;

  return (
    <>
      <Seo page="home" />
      <section
        className="relative py-12 px-6 bg-cover bg-center h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${LANGUAGE.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         {/* Overlay */}
         <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>

         {/* Content */}
         <div className="z-10 text-white px-6 mt-80 text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
             {LANGUAGE.title}
           </h2>
           <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
             {LANGUAGE.subtitle}
           </p>
           <Link
             to="/contact"
             className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
           >
             {LANGUAGE.cta}
           </Link>
         </div>
      </section>
    </>
  );
}

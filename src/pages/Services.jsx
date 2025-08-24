import { DICT } from "../components/language/LangPack";
import { useLang } from "../components/language/LangContext";
import { Price } from "../components/Price";
import Seo from "../components/Seo";

export default function Services() {
  const { lang } = useLang();
  const LANGUAGE = DICT[lang].services;
  const currency = "MDL";

  return (
    <>
      <Seo page="services" />
      <div className="bg-gray-50 py-12 px-6 flex justify-center h-full">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {LANGUAGE.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LANGUAGE.list.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.title}
                  className="w-full object-cover h-[250px]"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-700 text-center">
                    {item.title}
                  </h2>
                  {item.list.map((subtype, index) => (
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium truncate">{subtype.title}</span>
                      <span className="font-semibold tabular-nums whitespace-nowrap">
                        <Price value={subtype.price}  priceCurrency={currency} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

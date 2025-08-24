import { DICT } from "../components/language/LangPack";
import { useLang } from "../components/language/LangContext";
import Seo from "../components/Seo";

export default function AboutUs() {
  const { lang } = useLang();
  const LANGUAGE = DICT[lang].about;

  const HtmlContent = ({ htmlString }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
  };

  function CoreValueComponent({ title, info }) {
    return <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">
        {info}
      </p>
    </div>;
  }

  return (
    <>
      <Seo page="about" />
      <div className="bg-gray-50 py-12 px-6 h-full">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {LANGUAGE.title}
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}${LANGUAGE.image}`}
              alt="Our Dental Team"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {LANGUAGE.intro.title}
            </h2>
            <HtmlContent htmlString={LANGUAGE.intro.info} />
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mt-16">


          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
            {LANGUAGE.coreValues.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LANGUAGE.coreValues.items.map((item, index) => (
              <CoreValueComponent key={index} title={item.title} info={item.info} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

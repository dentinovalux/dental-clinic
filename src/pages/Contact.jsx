import { useState } from "react";
import { DICT } from "../components/language/LangPack";
import { useLang } from "../components/language/LangContext";
import Seo from "../components/Seo";

export default function ContactUs() {
  const { lang } = useLang();
  const LANGUAGE = DICT[lang].contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      const subject = encodeURIComponent(`Contact Form Message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`
      );

      window.location.href = `mailto:dentinovalux@gmail.com?subject=${subject}&body=${body}`;
    };

  return (
    <>
      <Seo page="contact" />
      <div className="bg-gray-50 py-12 px-6 h-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {LANGUAGE.title}
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {LANGUAGE.chat.title}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 mb-2">{LANGUAGE.chat.name}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={LANGUAGE.chat.name}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">{LANGUAGE.chat.email}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={LANGUAGE.chat.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">{LANGUAGE.chat.phone}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={LANGUAGE.chat.phonePlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">{LANGUAGE.chat.message}</label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={LANGUAGE.chat.messagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {LANGUAGE.chat.submitTitle}
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {LANGUAGE.info.title}
              </h2>
              <p className="text-gray-600 mb-2">
                📍 <span className="font-medium">{LANGUAGE.info.address}</span>
                {LANGUAGE.info.addressContent}
              </p>
              <p className="text-gray-600 mb-2">
                ☎️ <span className="font-medium">{LANGUAGE.info.phone}</span>
                   <a
                     href={`tel:${LANGUAGE.info.phoneContent}`}
                     className="text-blue-600 hover:underline"
                   >
                   {LANGUAGE.info.phoneContent}
                   </a>
              </p>
              <p className="text-gray-600">
                ✉️ <span className="font-medium">{LANGUAGE.info.email}</span> {LANGUAGE.info.emailContent}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-lg h-64">
              {LANGUAGE.location}
              <div className="w-full h-full flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8279.03568270247!2d28.86202747741753!3d46.98379477113955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97941fed15e1b%3A0xc1eabaabca5fba66!2sDentinova%20Lux!5e1!3m2!1sen!2sus!4v1756033648489!5m2!1sen!2sus"
                  width="100%" heith="100%"
                  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

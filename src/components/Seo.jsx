import { useEffect } from "react";
import { DICT } from "./language/LangPack";
import { useLang } from "./language/LangContext";

export default function Seo({ page }) {
  const { lang } = useLang();
  const seo = DICT[lang].seo;

  useEffect(() => {
    if (!seo) return;

    // pick the right title + desc based on page name
    const title = seo[`${page}Title`] || seo.defaultTitle;
    const desc = seo[`${page}Desc`] || seo.defaultDesc;

    document.title = title;

    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = desc;
  }, [lang, seo, page]);

  return null; // nothing to render, SEO only affects <head>
}
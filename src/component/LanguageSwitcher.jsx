import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const googleTranslateScript = document.createElement("script");
        googleTranslateScript.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        googleTranslateScript.async = true;
        document.body.appendChild(googleTranslateScript);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Layout درست کریں
          includedLanguages: "ur,en,hi,ar,fr,de,zh", // اپنی مرضی کی زبانیں شامل کریں
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="position-fixed bottom-0 start-0 m-3">
      <div className="card shadow-lg p-2">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

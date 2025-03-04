import React, { useEffect, useState } from 'react';
import '../Styles/Translator.css';
import img from '../assets/translate.png';

const Translater = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                "translatorId"
            );
        };
    }, []);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const translateto = (lang) => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
        }
    };

    return (
        <div id='translatorId'>
            <div className={`lang-menu ${menuOpen ? 'show' : 'hide'}`}>
                <div onClick={() => translateto('en')}>English</div>
                <div onClick={() => translateto('ur')}>Urdu</div>
                <div onClick={() => translateto('ar')}>Arabic</div>
                <div onClick={() => translateto('es')}>Spanish</div>
                <div onClick={() => translateto('fr')}>French</div>
                <div onClick={() => translateto('de')}>German</div>
                <div onClick={() => translateto('it')}>Italic</div>
                <div onClick={() => translateto('zh-CN')}>Chinese</div>
            </div>

            <img className='lang-img' onClick={openMenu} src={img} alt="Translate" />
        </div>
    );
};

export default Translater;

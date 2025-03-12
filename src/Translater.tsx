import React, { useEffect, useState } from 'react';
import '../src/Styles/Translator.css';
import img from '../public/translate.png';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}

const Translater: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    { pageLanguage: 'en' },
                    "translatorId"
                );
            }
        };
    }, []);

    const openMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    const translateto = (lang: string): void => {
        const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
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
                <div onClick={() => translateto('it')}>Italian</div>
                <div onClick={() => translateto('zh-CN')}>Chinese</div>
            </div>

            <img className='lang-img' onClick={openMenu} src={img} alt="Translate" />
        </div>
    );
};

export default Translater;
import { createContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import MessagesSpanish from '../lang/es-MX.json';
import MessagesEnglish from '../lang/en-US.json';

export const langContext = createContext();

export const LangProvider = ({ children }) => {

    let defaultLocale;
    let defaultMessages;

    const lang = localStorage.getItem('lang');
    console.log(lang)

    if( lang ) {
        defaultLocale = lang;

        if( lang === 'es-MX') {
            defaultMessages = MessagesSpanish;
        } else if( lang === 'en-US') {
            defaultMessages = MessagesEnglish;
        } else {
            defaultLocale = "en-US";
            defaultMessages = MessagesEnglish;
        }
    }

    const [ messages, setMessages] = useState( defaultMessages );
    const [ locale, setLocale] = useState( defaultLocale );

    const setLanguage = ( languaje ) => {
        switch ( languaje ) {
            case 'en-US':
                setMessages( MessagesEnglish );
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            case 'es-MX':
                setMessages( MessagesSpanish );
                setLocale('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            
            default:
                setMessages( MessagesEnglish );
                setLocale('en-US');
        }
    }
 
    useEffect( () => {

    },[ locale, messages ])


    return (
        <langContext.Provider value={{
            setLanguage,
            locale,
        }}>
            <IntlProvider locale={ locale } messages={ messages }>
                { children }
            </IntlProvider>
        </langContext.Provider>
    )
}
import './index.css';
import {  LangProvider } from './context/langContext';
import { Portfolio, Nav, Header,Experience,Footer, Contact, About } from './components/exports'

export const App = () => {

    

    return (
        <LangProvider>            
                <Header/>
                <Nav/>
                <About/>
                <Experience/>
                <Portfolio/>
                <Contact/>
                <Footer/>
        </LangProvider>
    )
}

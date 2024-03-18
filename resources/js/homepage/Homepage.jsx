import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Menu from "./Menu";
import Price from "./Price";
import Reviews from "./Reviews";

export default function Homepage() {
    return (
        <>
        <Menu />
        <div>Jak se máš?</div>
        <MainContent />
        <Features />
        <Price />
        <Reviews />
        <Contact />
        <Footer />
        </>
    )
}
import Footer from "../common/Footer";
import Header from "../common/Header";
import Contact from "./Contact";
import Features from "./Features";
import MainContent from "./MainContent";
import Price from "./Price";
import Reviews from "./Reviews";

export default function Homepage() {
    return (
        <div className="homepage" id="homepage">
            <Header />
            <MainContent />
            <Features />
            <Price />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}
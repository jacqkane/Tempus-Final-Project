import Contact from "./Contact";
import Features from "./Features";
import MainContent from "./MainContent";
import Price from "./Price";
import Reviews from "./Reviews";

export default function Homepage() {
    return (
        <div className="homepage">
            <MainContent />
            <Features />
            <Price />
            <Reviews />
            <Contact />
        </div>
    )
}
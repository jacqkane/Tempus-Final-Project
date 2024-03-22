import "/resources/scss/homepage/Reviews.scss";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeftBold, mdiArrowRightBold } from "@mdi/js";
import John from '/public/reviews-img/John.jpg';
import Sarah from '/public/reviews-img/Sarah.jpeg';
import David from '/public/reviews-img/David.jpeg';
import Emily from '/public/reviews-img/Emily.jpeg';
import Michael from '/public/reviews-img/Michael.jpeg';

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);    

    const reviews = [
        {
            text: "This app revolutionized how we manage attendance in our company. It's user-friendly and incredibly efficient!",
            image: John,
            name: "John D."
        },
        {
            text:  "I love the customizable break options! It's so convenient for both employees and managers.",
            image: Sarah,
            name: "Sarah W"

        },

        {
            text: "Thanks to this app, I can easily keep track of my team's work hours, even when I'm on the go. Highly recommended!",
            image: David,
            name: "David K."
        }, 

        {
            text: "Simple yet powerful! It's made managing our staff attendance a breeze.",
            image: Emily,
            name: "Emily L."
        },

        {
            text: "The real-time monitoring feature is a game-changer. I can now stay on top of attendance issues before they become a problem.",
            image: Michael,
            name: "Michael S."
        }
    ];

    const handlePrevReview = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNextPreview = () => {
        setCurrentIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <section className="reviews" id="reviews">
                <h2>Testimonials</h2>
                <div className="reviews-container">
                    <div className="arrow-left" onClick={handlePrevReview}>
                        <Icon
                            path={mdiArrowLeftBold}
                            title="User Profile"
                            size={3}
                            color="black"
                        />
                    </div>
                    <div className="single-review">
                        <p>{reviews[currentIndex].text}</p>
                        <img src={reviews[currentIndex].image} alt="User" />
                        <p>{reviews[currentIndex].name}</p>
                    </div>

                    <div className="arrow-right" onClick={handleNextPreview}>
                        <Icon
                            path={mdiArrowRightBold}
                            title="User Profile"
                            size={3}
                            color="black"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

import { useState } from 'react';
import '/resources/scss/homepage/Price.scss';
import { Link } from 'react-router-dom';

export default function Price () {
    const [userCount, setUserCount] = useState(1);

    const increaseUserCount = () => {
        setUserCount(userCount + 1);
    }

    const decreaseUserCount = () => {
        if (userCount > 1) {
            setUserCount(userCount - 1);
        }
    }

    const pricePerUser = 1.4;

    const totalPrice = Math.round(userCount * pricePerUser)
    return (
        <>
        <section className='price-calculator'>
            <h2>Price calculator</h2>
            <div className='user-counter'>
                <p>Number of active users:</p>
                <div className='counter-buttons'>
                    <button onClick={decreaseUserCount}>-</button>
                    <div className='user-count'>{userCount}</div>
                    <button onClick={increaseUserCount}>+</button>
                </div>
                <input 
                type="range" 
                min="1"
                max="500"
                value={userCount}
                onChange={(e) => setUserCount(parseInt(e.target.value))}
                />
            </div>
            <div className='price-details'>
                <p>Total price: {totalPrice} €</p>
                <div className='buttons'>
                    <button><Link to="/contact">more information!</Link></button>
                    <button><Link to="/register">Try it!</Link></button>
                </div>
            </div>

            <div className="additional-content">

            </div>
        </section>
        </>
    )
}
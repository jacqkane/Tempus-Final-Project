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

    const pricePerUser = 6.2;

    const totalPrice = Math.round(userCount * pricePerUser)
    return (
        <>
        <section className='price-calculator' id='price'>
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
                <p title='Price for 1 person is 6.2€'>Total price: {totalPrice} € /month</p>
                <div className='buttons'>
                    <a href="#contact">more information!</a>
                    <Link to="/register">Try it!</Link>
                </div>
            </div>
        </section>
        </>
    )
}
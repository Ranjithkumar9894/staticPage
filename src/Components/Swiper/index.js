import React, { useEffect, useState } from 'react'
import './style.css'
const SwiperComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3); // Default to show 3 cards

    const data = [
        {
            id: 1,
            profile: 'assets/profile3.jpeg',
            name: 'John',
            role: 'Designation',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        },
        {
            id: 2,
            name: 'Jane',
            profile: 'assets/profile2.jpeg',
            role: 'Designation',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        },
        {
            id: 3,
            name: 'Jeremy',
            profile: 'assets/profile1.jpeg',
            role: 'Designation',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        }
        ,
        {
            id: 4,
            name: 'Jeremy',
            profile: 'assets/profile2.jpeg',
            role: 'Designation',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        },
        {
            id: 5,
            name: 'John',
            profile: 'assets/profile1.jpeg',
            role: 'Designation',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        },
        {
            id: 6,
            name: 'Jane',
            role: 'Designation',
            profile: 'assets/profile3.jpeg',
            grade: 'Division',
            content: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCardsToShow(1); // For mobile view, show one card at a time
            } else if (window.innerWidth <= 1024) {
                setCardsToShow(2); // For tab view, show two cards at a time
            } else {
                setCardsToShow(3); // For desktop view, show three cards at a time
            }
        };

        handleResize(); // Initial setup based on window size
        window.addEventListener("resize", handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up event listener
        };
    }, []);

    const handleNext = () => {
        if (currentIndex + cardsToShow < data.length) {
            setCurrentIndex((prevIndex) => prevIndex + cardsToShow);
        }
    };

    const handlePrev = () => {
        if (currentIndex - cardsToShow >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - cardsToShow);
        }
    };

    const handleBulletClick = (index) => {
        setCurrentIndex(index * cardsToShow);
    };
    return (
        <div className='root'>
            <div className='text-container'>
                <h1 className='headName'>
                    Section title goes here
                </h1>
                <h3 className='para-cont'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </h3>
            </div>
            <div className='all-swip'>
                <button
                    className="swiper-button-prev"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    {'<'}
                </button>
                <div
                    className="swiper-wrapper"
                    style={{}}
                >
                    {data.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
                        <div
                            key={item.id}
                            className="swiper-slide"
                            style={{ width: `${100 / cardsToShow}%` }}
                        >
                            <div className='class-tailer'>
                                <img src={item.profile} className='image-top' alt={item.name} style={{ width: "50%" }} />
                                <div className='cont-main'>
                                    <h3 className='name'>{item.name}</h3>
                                    <p className='grade'>{item.role}</p>
                                    <p className='grade'>{item.grade}</p>
                                </div>
                            </div>
                            <div className='class-para'>
                                <div className='border-line'></div>
                                <p className='paragraph-cont'>"{item.content}"</p>

                            </div>
                            <button className='botton-explore'>
                                Explore now {'>'}
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="swiper-button-next"
                    onClick={handleNext}
                    disabled={currentIndex + cardsToShow >= data.length}
                >
                    {'>'}
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', marginTop: '34px' }}>
                <button
                    className="swiper-button-prev1"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    {'<'}
                </button>

                <div className="swiper-pagination">
                    {Array.from({ length: Math.ceil(data.length / cardsToShow) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handleBulletClick(i)}
                            className={currentIndex / cardsToShow === i ? "active" : "inactive"}
                            style={{
                                backgroundColor: currentIndex / cardsToShow === i ? "red" : "#fff",
                            }}
                        ></button>
                    ))}
                </div>
                <button
                    className="swiper-button-next1"
                    onClick={handleNext}
                    disabled={currentIndex + cardsToShow >= data.length}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default SwiperComp
import React from 'react'
import './style.css'
const PhotoCollection = () => {
    const images = [
        {
            id: 1,
            image: 'assets/image-03.jpg',
            width: '220px',
            height: '130px'
        },
        {
            id: 2,
            image: 'assets/image-02.jpg',
            width: '150px',
            height: '130px'
        },
        {
            id: 3,
            image: 'assets/image-01.jpg',
            width: '150px',
            height: '130px'
        },
        {
            id: 4,
            image: 'assets/image-03.jpg',
            width: '220px',
            height: '130px'
        },
        {
            id: 5,
            image: 'assets/image-04.jpg',
            width: '150px',
            height: '130px'
        },
        {
            id: 6,
            image: 'assets/image-05.jpg',
            width: '150px',
            height: '130px'
        },
        {
            id: 7,
            image: 'assets/image-06.jpg',
            width: '220px',
            height: '130px'
        },
        {
            id: 8,
            image: 'assets/image-04.jpg',
            width: '150px',
            height: '130px'
        }, {
            id: 9,
            image: 'assets/image-05.jpg',
            width: '150px',
            height: '130px'
        },

    ]
    return (
        <div className='root1'>
            <div className='text-container'>
                <h1 className='headName'>
                    Section title goes here
                </h1>
                <h3 className='para-cont'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </h3>
            </div>
            <div className='img-continer'>
                {images.map((item, idx) => {
                    return (
                        <div style={{ display: 'flex' }}>

                            <img src={item?.image} alt='data' width={item?.width} height={item?.height} />
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default PhotoCollection
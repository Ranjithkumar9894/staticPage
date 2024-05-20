import React from 'react'
import './style.css'
const Header = () => {
    return (



        <div className='root'>

            <div className='video-image' dangerouslySetInnerHTML={{
                __html: `
               <video
               loop
               width='100%'
              
               muted
               autoplay
               playsinline
               src="assets/video.mp4"
               />,
               ` }}></div>
            <img src='assets/image-07.png' className='imgae-show' alt='img' width={'100%'} height={'100%'} />
            <div className='textContent'>            </div>
            <div className='all-coll'>
                <div className='textContent1'>
                    <h1 className="text-cont">Lorem ipsum <span style={{ color: 'red' }}>dolor</span></h1>
                    <button className="bubble-btn">{'Explore'}     &gt;</button>
                </div>
                <div className='and-imge' style={{
                    height: '100%'
                }}>
                    <img src='assets/andIcon.jpeg' alt='image' height={'100%'} style={{ opacity: '8%' }} />
                </div>
            </div>
        </div>


    )
}

export default Header
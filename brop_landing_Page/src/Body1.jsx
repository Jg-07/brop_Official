import React from 'react';
import './App.css'
import brop from './brop.svg'
import google from './google.svg'
import apple from './apple.svg'
import back from './back.png'
// import brop2 from './brop2.svg'
// import plane from './plane.png'
// import instagram from './instagram.svg'
// import twitter from './twitter.svg'

export default function Body1() {
    return (
        <div class="body1">
            <div class="hidder"></div>
            <section class="sec1">
                <div class="logo">
                    <img src={brop} alt="" />
                </div>
                <div class="text">
                    <h1>We are here to make you travel with a smile</h1>
                    <h5>Hey Flyers, get ready. Brop is here to make your air travel easy and fun.</h5>
                </div>
                <div class="app">
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                </div>
            </section>
            <section class="sec2">
                <img src={back} alt="" />
            </section>
        </div>
    )
}
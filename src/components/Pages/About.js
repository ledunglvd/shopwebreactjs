import React from 'react'
import './About.css'

function About() {
    return (
        
        <div>
            
            <div class="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 style={{textAlign: 'center'}}>Our Team</h2>
            <div class="column">
            <div class="card">
            <img class="img_avt" src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg" alt="Mike" style={{width:'100%'}}/>
            <div class="container ">
                <h2>Mike Ross</h2>
                <p class="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>
            <div class="column">
            <div class="card">
            <img class="img_avt" src="https://d25tv1xepz39hi.cloudfront.net/2016-01-31/files/1045.jpg" alt="Mike" style={{width:'100%'}}/>
            <div class="container">
                <h2>Mike Ross</h2>
                <p class="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <img class="img_avt" src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg" alt="John" style={{width:'100%'}}/>
            <div class="container">
                <h2>John Doe</h2>
                <p class="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>
            </div>


        
    )
}

export default About

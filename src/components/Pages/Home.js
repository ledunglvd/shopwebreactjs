import React from 'react'

import './home.css'

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Slideshow Apartment Images
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " w3-opacity-off";
// }






function Home() {
    return (
     
        <div>
            
            <nav class="w3-sidebar w3-light-grey w3-collapse w3-top" style={{zIndex: '3', width: '260px'}} id="mySidebar">
  <div class="w3-container w3-display-container w3-padding-16">
    <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"></i>
    <h3>Rental</h3>
    <h3>from $99</h3>
    <h6>per night</h6>
    
    <form action="/action_page.php" target="_blank">
      <p><label><i class="fa fa-calendar-check-o"></i> Check In</label></p>
      <input class="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckIn" required/>          
      <p><label><i class="fa fa-calendar-o"></i> Check Out</label></p>
      <input class="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckOut" required/>         
      <p><label><i class="fa fa-male"></i> Adults</label></p>
      <input class="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6"/>              
      <p><label><i class="fa fa-child"></i> Kids</label></p>
      <input class="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6"/>
      <p><button class="w3-button w3-block w3-green w3-left-align" type="submit"><i class="fa fa-search w3-margin-right"></i> Search availability</button></p>
    </form>
  </div>
  <div class="w3-bar-block">
    <a href="#apartment" class="w3-bar-item w3-button w3-padding-16"><i class="fa fa-building"></i> Apartment</a>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-16" onclick="document.getElementById('subscribe').style.display='block'"><i class="fa fa-rss"></i> Subscribe</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-16"><i class="fa fa-envelope"></i> Contact</a>
  </div>
</nav>





<div class="w3-overlay w3-hide-large" onclick="w3_close()" style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>


<div class="w3-main w3-white" style={{marginLeft: '260px'}}>


  <div class="w3-hide-large" style={{marginTop: '80px'}}></div>


  <div class="w3-container" id="apartment">
    <h2 class="w3-text-green">The Apartment</h2>
    <div class="w3-display-container mySlides">
    <img src="https://www.w3schools.com/w3images/livingroom.jpg" style={{width: '100%', marginBottom:'-6px'}}/>
      <div class="w3-display-bottomleft w3-container w3-black">
        <p>Living Room</p>
      </div>
    </div>
    <div class="w3-display-container mySlides">
    <img src="https://www.w3schools.com/w3images/diningroom.jpg" style={{width: '100%', marginBottom:'-6px'}}/>
      <div class="w3-display-bottomleft w3-container w3-black">
        <p>Dining Room</p>
      </div>
    </div>
    <div class="w3-display-container mySlides">
    <img src="https://www.w3schools.com/w3images/bedroom.jpg" style={{width: '100%', marginBottom:'-6px'}}/>
      <div class="w3-display-bottomleft w3-container w3-black">
        <p>Bedroom</p>
      </div>
    </div>
    <div class="w3-display-container mySlides">
    <img src="https://www.w3schools.com/w3images/livingroom2.jpg" style={{width: '100%', marginBottom:'-6px'}}/>
      <div class="w3-display-bottomleft w3-container w3-black">
        <p>Living Room II</p>
      </div>
    </div>
  </div>
  <div class="w3-row-padding w3-section">
    <div class="w3-col s3">
      <img class="demo w3-opacity w3-hover-opacity-off" src="https://www.w3schools.com/w3images/livingroom.jpg" style={{width: '100%',cursor:'pointer'}} onclick="currentDiv(1)" title="Living room"/>
    </div>
    <div class="w3-col s3">
      <img class="demo w3-opacity w3-hover-opacity-off" src="https://www.w3schools.com/w3images/diningroom.jpg" style={{width: '100%',cursor:'pointer'}} onclick="currentDiv(2)" title="Dining room"/>
    </div>
    <div class="w3-col s3">
      <img class="demo w3-opacity w3-hover-opacity-off" src="https://www.w3schools.com/w3images/bedroom.jpg" style={{width: '100%',cursor:'pointer'}} onclick="currentDiv(3)" title="Bedroom"/>
    </div>
    <div class="w3-col s3">
      <img class="demo w3-opacity w3-hover-opacity-off" src="https://www.w3schools.com/w3images/livingroom2.jpg" style={{width: '100%',cursor:'pointer'}} onclick="currentDiv(4)" title="Second Living Room"/>
    </div>
  </div>

  <div class="w3-container">
    <h4><strong>The space</strong></h4>
    <div class="w3-row w3-large">
      <div class="w3-col s6">
        <p><i class="fa fa-fw fa-male"></i> Max people: 4</p>
        <p><i class="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
        <p><i class="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
      </div>
      <div class="w3-col s6">
        <p><i class="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
        <p><i class="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
      </div>
    </div>
    
    
    <h4><strong>Amenities</strong></h4>
    <div class="w3-row w3-large">
      <div class="w3-col s6">
        <p><i class="fa fa-fw fa-shower"></i> Shower</p>
        <p><i class="fa fa-fw fa-wifi"></i> WiFi</p>
        <p><i class="fa fa-fw fa-tv"></i> TV</p>
      </div>
      <div class="w3-col s6">
        <p><i class="fa fa-fw fa-cutlery"></i> Kitchen</p>
        <p><i class="fa fa-fw fa-thermometer"></i> Heating</p>
        <p><i class="fa fa-fw fa-wheelchair"></i> Accessible</p>
      </div>
    </div>
    
    
    <h4><strong>Extra Info</strong></h4>
    <p>Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p>
    
    
    <h4><strong>Rules</strong></h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Subscribe to receive updates on available dates and special offers.</p>
    <p><button class="w3-button w3-green w3-third" onclick="document.getElementById('subscribe').style.display='block'">Subscribe</button></p>
  </div>
  
  
  
  <div class="w3-container" id="contact">
    <h2>Contact</h2>
    <i class="fa fa-map-marker" style={{width:'30px'}}></i> CIC Trung Kinh Cau Giay Ha Noi, Viet Nam
    <i class="fa fa-phone" style={{width:'30px'}}></i> Phone: +84 981139925
    <i class="fa fa-envelope" style={{width:'30px'}}> </i> Email: dunglv181020@mail.com
    <p>Questions? Go ahead, ask them:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/></p>
    <button type="submit" class="w3-button w3-green w3-third" onclick="handSubmit">Send a Message</button>
    </form>
  </div>
  
  <footer class="w3-container w3-padding-16" style={{marginTop:'32px'}}>  <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green"></a></footer>


</div>



<div id="subscribe" class="w3-modal">
  <div class="w3-modal-content w3-animate-zoom w3-padding-large">
    <div class="w3-container w3-white w3-center">
      <i onclick="document.getElementById('subscribe').style.display='block'" class="fa fa-remove w3-button w3-xlarge w3-right w3-transparent"></i>
      <h2 class="w3-wide">SUBSCRIBE</h2>
      <p>Join our mailing list to receive updates on available dates and special offers.</p>
      <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail"/></p>
      <button type="button" class="w3-button w3-padding-large w3-green w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='block'">Subscribe</button>
    </div>
  </div>
</div>

            
           
        </div>
    )
}

export default Home

import React from 'react'
import './News.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<FontAwesomeIcon icon={['fab', 'google']} />



function New() {
    return (
        
        <div>
            
           <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Nguyễn Văn A"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="vuive@.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="CIC Trung Kính Cầu Giấy"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Hà Nội"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Vui Vẻ"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="380000"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color: 'navy'}}></i>
              <i class="fa fa-cc-amex" style={{color: 'blue'}}></i>
              <i class="fa fa-cc-mastercard"style={{color: 'red'}} ></i>
              <i class="fa fa-cc-discover" style={{color: 'orange'}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Nguyễn Văn A"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="09888*****"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="*****"/>

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2022"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="482"/>
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn"/>
      </form>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Cart
        <span class="price" style={{color:'black'}}>
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>


      <p>Total <span class="price" style={{color:'black'}}><b>$30</b></span></p>
    </div>
  </div>
</div>


        </div>
    )
}

export default New

import React from 'react'
import './Contack.css'


export default function Contack() {
    return (
      
        <div>
              <div style={{textAlign: 'center'}}>
    <h2 className="texth2">Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
              <div class="column">
                <img src="https://www.w3schools.com/w3images/map.jpg" style={{width:'100%'}}/>
                </div>
                <div class="column">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            
            <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 170}}></textarea>
        <input type="submit" value="Submit"></input>
            </div>

        </div>
    )
}

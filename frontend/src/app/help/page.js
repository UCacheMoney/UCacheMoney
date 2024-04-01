import "./Help.css";
import React from "react"
import NavbarComponent from "../NavbarComponent/NavbarComponent.js"

export default function login(){
    return( 
      
    
<div className="help-page">
<NavbarComponent />
<main>
  <div className = "container">
  <div className = "column1">
    </div>
      <div className = "column2">
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
      <div className="question">
        <h3>How do I reset my password?</h3>
        <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.</p>
      </div>
      <div>
        <h3>
          How do I view my Balance?
        </h3>
        <p>
          To view your balance, press the dashboard button on the navigation bar and your balance should appear.
        </p>
      </div>
      <div className="question">
        <h3>How can I contact customer support?</h3>
        <p>You can contact our customer support team by emailing support@example.com or by calling 1-800-123-4567.</p>
      </div>
      <div className = "justified">
        <form>
      <textarea id="subject" name="subject" placeholder="Ask your own question..." rows = "15" cols="50"></textarea>
     <br></br>
      <input type="submit" value="Submit" style={{width: "150px", height: "40px"}}></input>
      </form>
      </div>
        </section>
      </div>

  <div className = "column1">

</div>
  </div>

 
</main>
</div>
    );
}
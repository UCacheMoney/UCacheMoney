import "./Help.css";

export default function login(){
    return( 
<div className="help-page">
<header>
  <h1>Help Page</h1>
</header>
<main>
  <section id="faq">
    <h2>Frequently Asked Questions</h2>
    <div className="question">
      <h3>How do I reset my password?</h3>
      <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.</p>
    </div>
    <div className="question">
      <h3>How can I contact customer support?</h3>
      <p>You can contact our customer support team by emailing support@example.com or by calling 1-800-123-4567.</p>
    </div>
  </section>
</main>
</div>
    );
}
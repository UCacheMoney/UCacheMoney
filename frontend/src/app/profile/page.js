import "./profile.css";

export default function login(){
    return( 
<div className="home-page">
<header>
  <div>Ucache$ - Profile</div>
  <section class="balance">
    <div>Balance: $2000.00</div>
  </section>
</header>
<main>
  
  <section className="navBar">
    <div href="#">Profile</div>
    <div href="#">Set Spend Limit</div>
    <div href="#">Set Savings Goal</div>
    <div href="#">View Child Account</div>
  </section>
  <section></section>
  <section className="spendReport">
    <div>Name: Fred Czerwinski</div>
    <div>Catagories:</div>
    <div className="spendCatagory">
      <div>Catagory</div>
      <div>200/200</div>
    </div>
    

    <div>Name: Fred Czerwinski</div>
  </section>
</main>
</div>
    );
}
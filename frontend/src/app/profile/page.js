import "./profile.css";
import SIDENAV from "../Components/sideNav";

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
  
  
  <SIDENAV/>
  <section></section>
  <section className="spendReport">
    <div>Name: Fred Czerwinski</div>
    <div>Total Spend:</div>
    <div>200</div>
    <div>Catagories:</div>
    <div className="spendCatagory">
      <div>Catagory #1</div>
      <div>20/200</div>
    </div>
    <div className="spendCatagory">
      <div>Catagory #2</div>
      <div>180/200</div>
    </div>
    

    
  </section>
</main>
</div>
    );
}
import "./profile.css";
import SIDENAV from "../components/sideNav";
import NavbarComponent from "../components/NavbarComponent";

export default function login(){
    return( 

<>
<NavbarComponent/>
<div className="container">
<div className="home-page">
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
</div>
</>
    );
}
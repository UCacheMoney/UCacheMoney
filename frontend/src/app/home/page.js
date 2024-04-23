"use client";
import SIDENAV from "../components/sideNav";
import "./home.css";


import useSWR from "swr";
import { fetcher } from "@/app/fetcher";
import { AuthActions } from "@/app/auth/utils";
import { useRouter } from "next/navigation";
import "./home.css";


export default function home(){
  const router = useRouter();
  const { data: user } = useSWR("/auth/users/me", fetcher);
  const { logout, removeTokens } = AuthActions();
  const handleLogout = () => {
    logout()
      .res(() => {
        removeTokens();

        router.push("/login");
      })
      .catch(() => {
        removeTokens();
        router.push("/login");
      });
  };
    return( 
<div className="home-page">
<header>
  <div>Ucache$ - Home</div>
  <section className="balance">
    <div>Balance: $2000.00</div>
  </section>
</header>
<main>

  <SIDENAV/>
  
  <section></section>
  <section className="spendReport">
    <div className="balChange increase">
      <a className="balName">Walmartaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
      <a className="balAmount">+$50.00</a>
    </div>
      
    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>

    <div className="balChange increase">
      <a className="balName">Walmart</a>
      <a className="balAmount">+$50.00</a>
    </div>

    <div className="balChange decrease">
      <a className="balName">Shell</a>
      <a className="balAmount">-$50.00</a>
    </div>
  </section>
</main>
</div>
    );
}
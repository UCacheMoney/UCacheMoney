"use client";
import React from 'react';

const SIDENAV = () => {
    return (
        <section className="navBar">
            <div>
                Balance: $200.00
            </div>
            <div>Set Spend Limit</div>
            <input type="text" id="spendlimit" name="spendlimit" style={{width: "150px"}}  /><br />
            <div href="#">Set Savings Goal</div>
            <input type="text" id="savegoal" name="savegoal" style={{width: "150px"}} /><br />
            <div> <a href="../login">Logout</a></div>
        </section>
    );
};

export default SIDENAV;
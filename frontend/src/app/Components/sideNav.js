"use client";
import React from 'react';

const SIDENAV = () => {
    return (
        <section className="navBar">
            <div><a href="../home">Home</a></div>
            <div><a href="../profile">Profile</a></div>
            <div>Set Spend Limit</div>
            <input type="text" id="spendlimit" name="spendlimit"  /><br />
            <div href="#">Set Savings Goal</div>
            <input type="text" id="savegoal" name="savegoal"  /><br />
            <div> <a href="../login">Logout</a></div>
        </section>
    );
};

export default SIDENAV;
import React from "react";
import "./Top.css";


export default function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    function scrollFunction() {
        const Button: HTMLElement | null = document.getElementById("topButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (Button === null) throw new Error("Cannot find topButton");
            Button.style.visibility = "visible";
        } else {
            if (Button === null) throw new Error("Cannot find topButton");
            Button.style.visibility = "hidden";
        }
    }
    window.onscroll = function() {scrollFunction();};
    window.onload = function() {scrollFunction();};

    return (
        <button onClick={TopEvent} id="topButton" title="Go to top">TOP</button>
    );
}
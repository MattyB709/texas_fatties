"use client";

export default function Button({className, children}) {
    function toyClick() {
        console.log("button clicked!");
      }
    return <button onClick = {toyClick} className = {className}>{children}</button>
}
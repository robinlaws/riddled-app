import React from "react";

export function Stats(){      
    let user = JSON.parse(localStorage.getItem('user'));
    return(
        <>
        <h1>GAMES PLAYED: {user.gamesPlayed}</h1>
        <h1>GAMES WON: {user.wins}</h1>
        <h1>GUESS DISTRIBUTION: </h1>
        <h2>One: {user.one}</h2>
        <h2>Two: {user.two}</h2>
        <h2>Three: {user.three}</h2>
        <h2>Four: {user.four}</h2>
        <h2>Five: {user.five}</h2>
        </>
    )       
}
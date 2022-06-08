import React from "react";

export function Stats(props){      
    console.log(props.user);
    return(
        <>
        <h1>GAMES PLAYED: {props.user.gamesPlayed}</h1>
        <h1>GAMES WON: {props.user.wins}</h1>
        <h1>GUESS DISTRIBUTION: </h1>
        <h2>One: {props.user.one}</h2>
        <h2>Two: {props.user.two}</h2>
        <h2>Three: {props.user.three}</h2>
        <h2>Four: {props.user.four}</h2>
        <h2>Five: {props.user.five}</h2>
        </>
    )       
}



   

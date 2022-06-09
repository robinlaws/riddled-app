import React, { useEffect, useState } from "react";

export function Stats(props){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));   
    
    return(
        <>
        <h1>RIDDLED STATS</h1>
        <h4>GAMES PLAYED: {user.gamesPlayed}</h4>
        <h4>GAMES WON: {user.wins}</h4>
        <h4>GUESS DISTRIBUTION: </h4>
        <h4>One: {user.one}</h4>
        <h4>Two: {user.two}</h4>
        <h4>Three: {user.three}</h4>
        <h4>Four: {user.four}</h4>
        <h4>Five: {user.five}</h4>
        </>
    )       
};
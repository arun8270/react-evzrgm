import { useState } from "react";
import Testone from "./Testone";
    export default function Test(props){
        let[username, setUsername] = useState('')
        return(
            <>
            <h1>{props.location}</h1>
            <Testone username = 'Arunkumar' onClick = {newUsername}/>
            </>
            
        )
    }
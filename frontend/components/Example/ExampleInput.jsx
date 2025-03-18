"use client"; //useState only support using on client side

import { useState } from "react"
import { Input } from "@heroui/input";

function ExampleInput(props){
    const [text, setText] = useState("") //Using state for store data

    return <>
    <Input 
        value={text} 
        onValueChange={setText} 
        label={props.text}
    />
    <h1>{text}</h1>
    </>
}

export default ExampleInput
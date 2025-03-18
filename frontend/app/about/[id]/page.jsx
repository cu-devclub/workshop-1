"use client"

import {useParams} from 'next/navigation'

export default function AboutDynamic(){
    const {id} = useParams()

    return <h1>{id}</h1>
}
// http://localhost:3000/about/:id

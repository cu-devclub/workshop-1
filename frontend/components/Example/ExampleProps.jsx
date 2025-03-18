export function ExampleProps(props){ // you can use parameter for parsing property of component
    return <>
        <h1>{props.text}</h1>
    </>
}

export const ExampleProps2 = ({text, id, ...props}) => {// you can strictly require some property
    return <>
        <h1>{text} {id}</h1>
    </>
}

export const ExampleProps3 = ({text = "this is default text", id = 0, ...props}) => { // you can assign default value for property
    return <>
        <h1>{text} {id}</h1>
    </>
}

// when you want to keep mulitple component in some file
// you can use export following by function instead using export default
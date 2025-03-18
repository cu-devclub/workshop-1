"use client"; // useRouter from next/navigation and onPress Event only available for client side
import { Button } from "@heroui/button"
import { useRouter } from "next/navigation"

function ExampleUseRoute(props){
    const router = useRouter()

    const redirectPage = () => {
        router.push("/about")
    }

    return <Button onPress={redirectPage}>{props.text}</Button> 
    // Button on heroui using onPress instead of onClick for check is user clicked
}

export default ExampleUseRoute
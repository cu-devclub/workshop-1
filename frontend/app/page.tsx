import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import ExampleComponent from '../components/Example/ExampleComponent'
import ExampleFragment from '../components/Example/ExampleFragment'
import ExampleInput from '../components/Example/ExampleInput'
import ExampleUseRouter from '../components/Example/ExampleUseRouter'

import { ExampleProps, ExampleProps2, ExampleProps3 } from "../components/Example/ExampleProps"

export default function Home() {
  return (<>
    <h1 className="text-gray-400">Example creating component</h1>
    <ExampleComponent/>
    <br/>
    <h1 className="text-gray-400">Example using Fragment</h1>
    <ExampleFragment/>
    <br/>
    <h1 className="text-gray-400">Example creating input box</h1>
    <ExampleInput text="Example input field"/>
    <br/>
    <h1 className="text-gray-400">Example using useRouter for navigating between page</h1>
    <ExampleUseRouter text="Button"/>
    <br/><br/>
    <h1 className="text-gray-400">Example Props</h1>
    <ExampleProps text="This text parsed from page"/>
    <br/>
    <h1 className="text-gray-400">Example Props with required props</h1>
    <ExampleProps2 text="Example String" id="1"/>
    <br/>
    <h1 className="text-gray-400">Example Props with default value</h1>
    <ExampleProps3/>
    <br/>
  </>);
}

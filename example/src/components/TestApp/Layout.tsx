import FirstComponent from "./FirstComponent.tsx"

import {FC} from "react"

const Container: FC = () => {
    return (
        <div className="container">
            <FirstComponent/>
        </div>
    )
}

export default Container

import {FC} from "react"

import styles from "./FirstComponent.module.css"

type FirstComponentProps = {}

const FirstComponent: FC<FirstComponentProps> = () => {
    return (
        <div className={ styles.firstComponent }>
            FirstComponent
        </div>
    )
}

export default FirstComponent

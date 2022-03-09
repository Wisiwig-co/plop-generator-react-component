import {FC} from "react"

import styles from "./TestComponent.module.css"

type TestComponentProps = {}

const TestComponent: FC<TestComponentProps> = () => {
    return (
        <div className={ styles.testComponent }>
            TestComponent
        </div>
    )
}

export default TestComponent

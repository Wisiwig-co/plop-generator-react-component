import TestComponent from "components/TestComponent"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<TestComponent />)
    expect(screen.getByText("TestComponent"))
})

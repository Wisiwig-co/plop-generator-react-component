import FirstComponent from "components/FirstComponent"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<FirstComponent />)
    expect(screen.getByText("FirstComponent"))
})

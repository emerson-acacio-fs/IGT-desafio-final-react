import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"

import Home from "pages/index"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

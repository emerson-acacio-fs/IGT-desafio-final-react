import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { theme } from "styles/theme"
import { YearSelect } from "."

describe("YearSelect", () => {
  it("render a select", () => {
    render(<YearSelect />)

    const select = screen.getByText("2015")
    expect(select).toBeInTheDocument()
  })
})

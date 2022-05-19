import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { theme } from "styles/theme"
import { Header } from "."

describe("Header", () => {
  it("render a heading", () => {
    render(<Header />)

    const heading = screen.getByRole("heading", {
      name: /react-campeonato-brasileiro/i,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      backgroundColor: theme.colors.gray,
      height: "5rem",
      fontSize: theme.font.sizes.xxlarge,
      lineHeight: "5rem",
      textAlign: "center",
      marginBottom: "1.5rem",
    })
  })
})

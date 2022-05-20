import { fireEvent, screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { theme } from "styles/theme"
import { YearSelect } from "."

describe("YearSelect", () => {
  it("render a select", async () => {
    render(<YearSelect year={2015} />)

    const select = screen.getByText("2015")

    expect(select).toBeInTheDocument()
  })

  it("should call the handleChangeYear when changing the item in select", async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter")
    const push = jest.fn()
    useRouter.mockImplementation(() => ({
      push,
      query: "",
      asPath: "",
      route: "/",
      prefetch: jest.fn(() => Promise.resolve(true)),
      replace: jest.fn(() => Promise.resolve(true)),
    }))

    render(<YearSelect year={2015} />)

    const select = screen.getByText("2015")
    fireEvent.keyDown(select, { keyCode: 40 })
    const option = await screen.findByText("2014")
    fireEvent.click(option)
    expect(push).toBeCalledWith("/2014")
  })

  it("should render a button od next ", () => {
    render(<YearSelect year={2015} />)

    const button = screen.getByRole("link", { name: "Next year" })
    expect(button).toBeInTheDocument()

    expect(button).toHaveStyleRule("width", "0")
    expect(button).toHaveStyleRule("height", "0")
    expect(button).toHaveStyleRule("border", "1.7rem solid transparent")
    expect(button).toHaveStyleRule(
      "border-left",
      `1.5rem solid ${theme.colors.gray}`,
    )
    expect(button).toHaveStyleRule("border-right", "0")
    expect(button).toHaveStyleRule("background-color", "transparent")
    expect(button).toHaveAttribute("href", "/2016")
  })
  it("should render a button of previous", () => {
    render(<YearSelect year={2015} />)

    const button = screen.getByRole("link", { name: "Previous year" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule("width", "0")
    expect(button).toHaveStyleRule("height", "0")

    expect(button).toHaveStyleRule("border", "1.7rem solid transparent")
    expect(button).toHaveStyleRule(
      "border-right",
      `1.5rem solid ${theme.colors.gray}`,
    )
    expect(button).toHaveStyleRule("border-left", "0")
    expect(button).toHaveAttribute("href", "/2014")
  })
})

it("should disabled previous button if it is the first year ", async () => {
  render(<YearSelect year={2003} />)
  const button = screen.getByRole("link", { name: "Previous year" })
  expect(button).toHaveStyleRule("pointer-events", "none")
  expect(button).toHaveStyleRule("opacity", "0.3")
})

it("should disabled next button if it is the last year ", async () => {
  const handleChangeYear = jest.fn()
  render(<YearSelect year={2015} />)
  const button = screen.getByRole("link", { name: "Next year" })
  expect(button).toHaveStyleRule("pointer-events", "none")
  expect(button).toHaveStyleRule("opacity", "0.3")
})

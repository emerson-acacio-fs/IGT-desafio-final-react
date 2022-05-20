import { fireEvent, screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { theme } from "styles/theme"
import { YearSelect } from "."

describe("YearSelect", () => {
  it("render a select", async () => {
    render(<YearSelect year={2015} handleChangeYear={(year: number) => {}} />)

    const select = screen.getByText("2015")

    expect(select).toBeInTheDocument()
  })

  it("should call the handleChangeYear when changing the item in select", async () => {
    const handleChangeYear = jest.fn()
    render(<YearSelect year={2015} handleChangeYear={handleChangeYear} />)

    const select = screen.getByText("2015")
    fireEvent.keyDown(select, { keyCode: 40 })
    const option = await screen.findByText("2014")
    fireEvent.click(option)
    expect(handleChangeYear).toBeCalledWith(2014)
  })

  it("should render a button od next ", () => {
    render(<YearSelect year={2015} handleChangeYear={(year: number) => {}} />)

    const button = screen.getByRole("button", { name: "Next year" })
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
    expect(button).toHaveStyleRule("opacity", "0.5", { modifier: ":disabled" })
  })
  it("should render a button of previous", () => {
    render(<YearSelect year={2015} handleChangeYear={(year: number) => {}} />)

    const button = screen.getByRole("button", { name: "Previous year" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule("width", "0")
    expect(button).toHaveStyleRule("height", "0")
    expect(button).toHaveStyleRule("opacity", "0.5", { modifier: ":disabled" })
    expect(button).toHaveStyleRule("border", "1.7rem solid transparent")
    expect(button).toHaveStyleRule(
      "border-right",
      `1.5rem solid ${theme.colors.gray}`,
    )
    expect(button).toHaveStyleRule("border-left", "0")
    expect(button).toHaveStyleRule("background-color", "transparent")
  })
})

it("should call the handleChangeYear when click the previous button", async () => {
  const handleChangeYear = jest.fn()
  render(<YearSelect year={2015} handleChangeYear={handleChangeYear} />)
  const button = screen.getByRole("button", { name: "Previous year" })

  fireEvent.click(button)
  expect(handleChangeYear).toBeCalledWith(2014)
})
it("should disabled previous button if it is the first year ", async () => {
  const handleChangeYear = jest.fn()
  render(<YearSelect year={2003} handleChangeYear={handleChangeYear} />)
  const button = screen.getByRole("button", { name: "Previous year" })

  fireEvent.click(button)
  expect(handleChangeYear).not.toBeCalled()
})

it("should call the handleChangeYear when click the next button", async () => {
  const handleChangeYear = jest.fn()
  render(<YearSelect year={2014} handleChangeYear={handleChangeYear} />)
  const button = screen.getByRole("button", { name: "Next year" })

  fireEvent.click(button)
  expect(handleChangeYear).toBeCalledWith(2015)
})

it("should disabled next button if it is the first year ", async () => {
  const handleChangeYear = jest.fn()
  render(<YearSelect year={2015} handleChangeYear={handleChangeYear} />)
  const button = screen.getByRole("button", { name: "Next year" })

  fireEvent.click(button)
  expect(handleChangeYear).not.toBeCalled()
})

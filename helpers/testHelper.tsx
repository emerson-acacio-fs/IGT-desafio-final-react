import { ReactElement } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "styles/theme"
import { render, RenderOptions } from "@testing-library/react"
import renderer, { TestRendererOptions } from "react-test-renderer"
const customRender = (ui: ReactElement, renderOptions: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

const toJSON = (ui: ReactElement, renderOptions?: TestRendererOptions) =>
  renderer
    .create(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)
    .toJSON()

export { customRender as render, toJSON }

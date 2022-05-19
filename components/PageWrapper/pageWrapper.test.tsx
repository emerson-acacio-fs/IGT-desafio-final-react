import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { PageWrapper } from "."

describe("PageWrapper", () => {
  it("render a page wrapper", () => {
    const { container } = render(
      <PageWrapper>
        <div>hahaahah</div>
      </PageWrapper>,
    )

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveStyle({
      margin: "0 auto",
      minWidth: "74rem",
      maxWidth: "118rem",
    })
    expect(screen.getByText("hahaahah")).toBeInTheDocument()
  })
})

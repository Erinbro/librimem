import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/angular"
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from "./breadcrumb.service";

describe("BreadcrumbComponent", () => {
  const params = [
    { param: "books", joinedParam: "books" },
    { param: "The Count of", joinedParam: "The%20Count%20of" }
  ]

  it("should render the component", async () => {
    await render(BreadcrumbComponent, {
      componentProperties: { params },
      imports: [RouterModule], providers: [BreadcrumbService]
    })
    expect(screen.getByText(params[0].param)).toBeInTheDocument()
  })

  it("should show the correct text", async () => {
    await render(BreadcrumbComponent, {
      componentProperties: { params }
    })
    expect(screen.getByText(params[1].param)).toBeInTheDocument()
  })
})

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/angular"
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from "./breadcrumb.service";
describe("BreadcrumbComponent", () => {
  const params = ["books"]
  const paramsJoined = "/books/i"

  it("should render the component", async () => {
    await render(BreadcrumbComponent, {
      componentProperties: { params: params },
      imports: [RouterModule], providers: [BreadcrumbService]
    })
    expect(screen.getByText(paramsJoined)).toBeInTheDocument()
  })

  it("should show the correct text", async () => {
    await render(BreadcrumbComponent, {
      componentProperties: { params: params }
    })
    expect(screen.getByText(paramsJoined)).toBeInTheDocument()
  })
})

import { BreadcrumbService } from "./breadcrumb.service";

describe("BreadcrumbService", () => {
  let breadcrumbService: BreadcrumbService;

  beforeEach(() => {
    breadcrumbService = new BreadcrumbService();
  })

  it("[format()] should return the formated paramters of the current route and their absolute path", () => {
    const paramsToTest = ["books", "Le%20Comte%20de%20Monte%20Cristo", "chapters", "Vendetta"]

    const [formatedParams, joinedParams] = breadcrumbService.format(paramsToTest)

    expect(formatedParams).toStrictEqual(["books", "Le Comte de Monte Cr...", "chapters", "Vendetta"])

    expect(joinedParams).toStrictEqual(["books", "books/Le%20Comte%20de%20Monte%20Cristo", "books/Le%20Comte%20de%20Monte%20Cristo/chapters", "books/Le%20Comte%20de%20Monte%20Cristo/chapters/Vendetta"])
  })


  it("[removeEmptyItems()] should remove empty items from array", () => {
    const paramsWithEmptyItems = ["", "a", "", "", "b"];
    const result = breadcrumbService.removeEmptyItems(paramsWithEmptyItems)
    expect(result).toStrictEqual(["a", "b"]);
  })

  it("[removeNumber20FromUrl()] should remove '%20' from the string in the parameter list of the route", () => {
    const paramsToClean = ["books", "param1%20param2%20"]
    const result = breadcrumbService.removeNumber20FromUrl(paramsToClean)
    expect(result).toStrictEqual(["books", "param1 param2"])
    expect(result.length === paramsToClean.length).toBeTruthy()
  })

  it("[shortenStringTo20()] should remove items from the parameter array", () => {
    const paramsToShorten = ["books", "123456789123456789123"]

    const result = breadcrumbService.shortenStringTo20(paramsToShorten)
    expect(result).toStrictEqual(["books", "12345678912345678912..."])
    expect(result.length === paramsToShorten.length)
  })

  it("[joinTheParams()] should join the params to their absolute route", () => {
    const paramsToTest = ["books", "chapters"]

    const result = breadcrumbService.joinTheParams(paramsToTest)


    expect(result).toEqual(["books", "books/chapters"])
    expect(result.length === paramsToTest.length)
  })
})

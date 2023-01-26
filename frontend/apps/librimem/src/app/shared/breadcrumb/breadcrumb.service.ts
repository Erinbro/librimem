import { Injectable } from '@angular/core';
@Injectable()
export class BreadcrumbService {


  public format(params: string[]): [params: string[], paramsJoined: string[]] {
    /**
     * The absolute path
     */
    let joinedParams: string[] = []
    /**
     * The route parameters that we show to the user
     */
    let paramsResult: string[] = []

    joinedParams = this.removeEmptyItems(params)
    paramsResult = this.removeEmptyItems(params)

    paramsResult = this.removeNumber20FromUrl(paramsResult)

    paramsResult = this.shortenStringTo20(paramsResult)

    joinedParams = this.joinTheParams(joinedParams)

    return [paramsResult, joinedParams]
  }

  public removeEmptyItems(params: string[]): string[] {
    const paramsCopy: string[] = []

    params.forEach((p, i) => {
      if (!(p.length === 0)) paramsCopy.push(p)
    })

    return paramsCopy
  }

  public removeNumber20FromUrl(params: string[]): string[] {
    const paramsCopy: string[] = []

    params.forEach((p, i) => {
      const without20 = p.split("%20")
      paramsCopy.push(without20.join(" ").trim())
    })

    return paramsCopy;
  }

  public shortenStringTo20(params: string[]): string[] {
    const paramsCopy: string[] = []

    params.forEach((p, i) => {
      if (p.length > 20) {
        paramsCopy.push(p.slice(0, 20) + "...")
      }
      else {
        paramsCopy.push(p)
      }
    })

    return paramsCopy;
  }

  public joinTheParams(params: string[]): string[] {
    const paramsCopy: string[] = []

    if (params.length === 1) return params
    else {
      for (let i = 0; i < params.length; i++) {
        let absoluteRoute = "";
        const lastNItems =
          this.getLastNItems(i, params)
        lastNItems.length === 1 ?
          absoluteRoute = lastNItems[0]
          : absoluteRoute = lastNItems.join("/")

        paramsCopy.push(absoluteRoute)
      }
    }

    return paramsCopy
  }

  /**
   * Helper method for joinTheParams
   * @param currentPosition The current position of the item
   */
  private getLastNItems<T>(currentPosition: number, list: T[]) {
    if (currentPosition === 0) return [list[currentPosition]]
    return list.slice(0, currentPosition + 1)
  }


}

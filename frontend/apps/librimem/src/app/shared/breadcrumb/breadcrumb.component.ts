import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { RouterService } from '../../services/router/router.service';

/**
 * Breadcrumb that shows the current position in the app.
 */
@Component({
  selector: 'librimem-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  providers: [BreadcrumbService]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  params!: {
    param: string,

    /**
     * The absolute path of the route
     */
    joinedParam: string
  }[];
  stateSubscription: { [key: string]: any } = {}
  constructor(private router: Router, private breadcrumbService: BreadcrumbService, private routerService: RouterService) { }

  ngOnInit(): void {
    this.stateSubscription = this.router.events.subscribe({
      next: (ev) => {
        if (!(ev instanceof NavigationEnd)) return

        this.routerService.deselect(ev.url)
        const routerParams = (ev as NavigationEnd).urlAfterRedirects.split("/")


        const [params, joinedParams] = this.breadcrumbService.format(routerParams)

        this.params = this.distribute(params, joinedParams)
      },


    })
  }

  ngOnDestroy() {
    this.stateSubscription['unsubscribe']()
  }

  /**
   * Binds the param and its correspoonding joinedParam together
   */
  distribute(params: string[], joinedParams: string[]): { param: string, joinedParam: string, navigable?: false }[] {
    const bindedParams: { param: string, joinedParam: string }[] = []
    params.forEach((_, i) => {
      bindedParams.push({ param: params[i], joinedParam: joinedParams[i] })
    })

    bindedParams[0].joinedParam
    return bindedParams
  }

  navigate(param: { param: string, joinedParam: string, navigable?: false }) {

    const params = param.joinedParam.split("/")
    const lastParam = params[params.length - 1]
    const urls = this.router.url.split("/");
    const url = urls[urls.length - 1]

    // NOTE If it is the last param
    if (param.navigable === false) return;

    if (lastParam === url) {
      return;
    }


    // If the link leads to somewhere else then we go
    else {
      this.router.navigate([param.joinedParam], {})
    }
  }

}

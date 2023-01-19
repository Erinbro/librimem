import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'librimem-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  constructor(private router: Router) { }
  params!: string[];

  ngOnInit(): void {
    this.params = this.router.url.split("/");
  }

}

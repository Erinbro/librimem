import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/common/article/article.service';

@Component({
  selector: 'librimem-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
})
export class ArticlesPageComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    return;
  }
}

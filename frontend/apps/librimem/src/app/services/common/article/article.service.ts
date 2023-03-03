import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from "jspdf"

/**
 * Service with logic for the article components
 */
@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private httpClient: HttpClient) { }



  fetchArticle(url: string) {
    return this.httpClient.get(url)
  }
}

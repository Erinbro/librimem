import { Injectable } from "@nestjs/common";
import { HttpClient } from '@angular/common/http';

// NOTE Make available in whole app through injecting in AppModule
/**
 * Client API to communicate with the pdf text extractor server
 */
@Injectable({
  providedIn: 'root'
})
export class ReaderAPI {
  constructor(private http: HttpClient) { }

  /**
   * Extracts the text from PDF and sends it back as string
   * @param pdf The pdf file
   */
  public async extractTextFromPDF(pdf: Blob) {
    this.http.post("http://localhost:8888/api/v1/pdf")
  }

}

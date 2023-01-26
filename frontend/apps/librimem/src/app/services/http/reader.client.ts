import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from "rxjs";

// NOTE Make available in whole app through injecting in AppModule
/**
 * Client API to communicate with the pdf text extractor server
 */
@Injectable({
  providedIn: 'root'
})
export class ReaderClient {
  constructor(private http: HttpClient) { }

  /**
   * Extracts the text from PDF and sends it back as string
   * @param pdf The pdf file
   */
  public async extractTextFromPDF(pdf: Blob) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append("Content-Type", 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

    const formData = new FormData();
    formData.append("pdf", pdf);

    this.http.post("http://localhost:9000/api/v1/pdf", formData, { headers })
      .subscribe((d) => {
        console.log("data: ", d)
      })

  }

}

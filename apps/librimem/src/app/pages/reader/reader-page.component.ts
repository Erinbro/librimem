import { Component, OnInit } from '@angular/core';
import Quill from "quill"
import { Converter } from '../../services/converter/converter.service';
import * as PDF from "pdfjs-dist"

@Component({
  selector: 'librimem-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss'],
})
export class ReaderPageComponent implements OnInit {

  content = '';
  constructor(private converter: Converter) {
  }

  ngOnInit(): void {
  }


}

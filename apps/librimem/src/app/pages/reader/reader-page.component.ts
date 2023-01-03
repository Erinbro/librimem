import { Component, OnInit } from '@angular/core';
import Quill from "quill"
import { ReaderClient } from '../../services/http/reader.client';

@Component({
  selector: 'librimem-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss'],
})
export class ReaderPageComponent implements OnInit {

  content = '';
  constructor(private readerClient: ReaderClient) {
  }

  ngOnInit(): void {
  }



}

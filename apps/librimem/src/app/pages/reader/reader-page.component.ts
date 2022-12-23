import { Component, OnInit } from '@angular/core';
import Quill from "quill"
import { Converter } from '../../services/converter/converter.service';

@Component({
  selector: 'librimem-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss'],
})
export class ReaderPageComponent implements OnInit {

  content = '';
  constructor(private converter: Converter) {
  }

  ngOnInit(): void { }

  loadFile(input: any) {
    console.log(input)
    const file = input.target.files[0]


    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (evt) => {
        console.log(evt.target)
        const result = evt.target?.result?.toString();
        if (result) {
          this.content = result;
          this.converter.extractHeaders(result)
        }
      }
      reader.onerror = function (evt) {
        // document.getElementById("fileContents").innerHTML = "error reading file";
      }
    }
  }
}

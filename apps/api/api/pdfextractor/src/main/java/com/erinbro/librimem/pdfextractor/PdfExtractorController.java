package com.erinbro.librimem.pdfextractor;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/v1/pdf")
public class PdfExtractorController {


  // READ: https://stackoverflow.com/questions/35680932/download-a-file-from-spring-boot-rest-service
  public ResponseEntity<Resource> extractTextFromPdf(@RequestPart File pdf) throws IOException {

    String pathString = "/home/josemagne/Downloads/firstpdf.pdf";

    Path path = FileSystems.getDefault().getPath(pathString);

    PDDocument doc = PDDocument.load(pdf);
    PDPage page = new PDPage();
    doc.addPage(page);

    doc.save(pathString);
    doc.close();

    // NOTE Create file
    File file = new File(pathString);


    HttpHeaders header = new HttpHeaders();
    header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=firstpdf.pdf");
    header.add("Cache-Control", "no-cache, no-store, must-revalidate");
    header.add("Pragma", "no-cache");
    header.add("Expires", "0");

    ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));


    return ResponseEntity.ok()
      .headers(header)
      .contentLength(file.length())
      .contentType(MediaType.APPLICATION_PDF)
      .body(resource);

  }

}

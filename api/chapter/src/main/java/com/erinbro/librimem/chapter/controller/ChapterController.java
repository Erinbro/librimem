package com.erinbro.librimem.chapter.controller;

import com.erinbro.librimem.chapter.model.Chapter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/chapters")
public class ChapterController {
    @GetMapping()
    void getChapters() {

    }
}

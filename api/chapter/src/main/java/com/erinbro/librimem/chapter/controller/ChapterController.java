package com.erinbro.librimem.chapter.controller;

import com.erinbro.librimem.chapter.clients.UserClient;
import com.erinbro.librimem.chapter.dto.AuthorizationRequestDto;
import com.erinbro.librimem.chapter.dto.AuthorizationResponseDto;
import com.erinbro.librimem.chapter.dto.ChapterRequest;
import com.erinbro.librimem.chapter.dto.ChaptersRequestDto;
import com.erinbro.librimem.chapter.model.Chapter;
import com.erinbro.librimem.chapter.service.ChapterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Handles incoming HTTP requests
 * and delegates them to the right
 * service
 */
@RestController
@RequestMapping("api/v1/chapters")
@RequiredArgsConstructor
public class ChapterController {

    private final ChapterService chapterService;

    /**
     * Returns all chapters from a book
     */
    @GetMapping()
    // e.g.) /chapters?bookid=1
    ResponseEntity<List<Chapter>> getChaptersFromBook(@RequestParam("bookid") Integer bookId) {
        return new ResponseEntity<>(chapterService.getChaptersFromBook(bookId), HttpStatus.OK);
    }

    /**
     * Returns a particular chapter from a book
     *
     * @param chapterId
     * @return
     */
    @GetMapping(path = "/{chapterId}")
    ResponseEntity<Chapter> getChapter(@PathVariable("chapterId") Integer chapterId) {
        return new ResponseEntity<Chapter>(chapterService.getChapter(chapterId), HttpStatus.OK);
    }

    /**
     * Adds a chapter to the db
     *
     * @param chapterRequest
     * @return
     */
    @PostMapping
    ResponseEntity<Chapter> saveChapter(@RequestBody @Valid ChapterRequest chapterRequest) {
        return new ResponseEntity<Chapter>(chapterService.saveChapter(chapterRequest), HttpStatus.OK);
    }

    @PostMapping("/book")
    ResponseEntity<List<Chapter>> saveChapters(@RequestBody @Valid ChaptersRequestDto chaptersRequestDto, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        this.chapterService.saveChapters(token, chaptersRequestDto);
        return ResponseEntity.ok(chaptersRequestDto.getChapters());
    }


    @DeleteMapping(path = "/{chapterId}")
    ResponseEntity<Chapter> deleteChapter(@PathVariable("chapterId") Integer chapterId) {
        return new ResponseEntity<>(chapterService.deleteChapter(chapterId), HttpStatus.OK);
    }

    @DeleteMapping(path = "/book/{bookId}")
    ResponseEntity<List<Chapter>> deleteAllChaptersFromBook(@PathVariable("bookId") Integer bookId) {
        return new ResponseEntity<>(chapterService.deleteAllChaptersFromBook(bookId), HttpStatus.OK);
    }
}

package com.erinbro.librimem.flashcard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for the flashcard app that
 * distributes request traffic to the service layer
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/flashcards")
public class FlashcardController {
    @PostMapping()
    public void saveFlashcard() {

    }

    @GetMapping()
    public void getFlashcards() {}

    @GetMapping()
    public void getFlashcard() {}
    @PutMapping()
    public void updateFlashcard(){}
    @DeleteMapping()
    public void deleteFlashcard() {}
}

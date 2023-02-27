package com.erinbro.librimem.flashcard.controller;

import jakarta.websocket.server.PathParam;
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
    public void getFlashcards() {
    }

    @GetMapping(path = "/{flashcardId}")
    public void getFlashcard(@PathParam("flashcardId") int flashcardId) {
    }

    @PutMapping()
    public void updateFlashcard() {
    }

    @DeleteMapping()
    public void deleteFlashcard() {
    }
}

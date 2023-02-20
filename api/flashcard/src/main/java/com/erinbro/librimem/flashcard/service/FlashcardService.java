package com.erinbro.librimem.flashcard.service;

import com.erinbro.librimem.flashcard.repository.FlashcardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    public void saveFlashcard() {}

    /**
     * Gets all the flashcards of a chapter
     * @param chapterId
     */
    public void getFlashcards(int chapterId, int entityId){}

    /**
     * Gets a particular flashcard
     */
    public void getFlashcard() {}

    /**
     * Updates a flashcard
     */
    public void updateFlashcard() {}

    public void deleteFlashcard(){}
}



package com.erinbro.librimem.flashcard.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ChapterRepositoryTest {
    @Autowired
    private FlashcardRepository flashcardRepository;

    // TODO
    @Test
    public void itShouldSaveFlashcard(){}

    @Test
    public void itShouldGetAllFlashcardsOfAChapter(){}

    @Test
    public void itShouldGetAFlashcardOfAChapter(){}

    @Test
    public void itShouldUpdateAFlashcardOfAChapter(){}

    @Test
    public void itShouldDeleteAFlashcardOfAChapter(){}

    @Test
    public void itShouldDeleteAllFlashcardsOfAChapter(){}

}

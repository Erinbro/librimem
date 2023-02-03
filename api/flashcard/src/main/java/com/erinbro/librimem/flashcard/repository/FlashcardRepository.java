package com.erinbro.librimem.flashcard.repository;


import com.erinbro.librimem.flashcard.model.Flashcard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashcardRepository extends JpaRepository<Flashcard, Integer> {
}

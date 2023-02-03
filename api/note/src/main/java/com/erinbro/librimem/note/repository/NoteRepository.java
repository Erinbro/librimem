package com.erinbro.librimem.note.repository;

import com.erinbro.librimem.note.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {
    @Query("SELECT n FROM Note n WHERE n.chapterId = ?1")
    Optional<List<Note>> findNotesByChapterId(String chapterId);


    @Query("SELECT n FROM Note n WHERE n.entityId = ?1")
    Optional<List<Note>> findNotesByBookId(String bookId);

}

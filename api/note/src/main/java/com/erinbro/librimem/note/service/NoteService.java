package com.erinbro.librimem.note.service;

import com.erinbro.librimem.note.converter.NoteConverter;
import com.erinbro.librimem.note.dto.NoteRequestDto;
import com.erinbro.librimem.note.model.Note;
import com.erinbro.librimem.note.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class NoteService {
    private final NoteRepository noteRepository;
    private final NoteConverter noteConverter;


    public Note saveNote(NoteRequestDto noteRequestDto) {
        Note newNote = noteConverter.convertDtoToEntity(noteRequestDto);
        noteRepository.save(newNote);
        log.info("Persisted new note: {}", newNote.getId());
        return newNote;
    }

    public List<Note>  getAllNotes(Integer entityId, Integer chapterId) {
        List<Note> notes = noteRepository.findAll();
        log.info("All notes of entity {} and chapter {} have been retrieved");
        return notes;
    }

    public Optional<List<Note>> getAllNotesByChapterId(Integer chapterId) {
        Optional<List<Note>> notes = noteRepository.findNotesByChapterId(chapterId.toString());
        return notes;
    }

    private List<Note> sortNotes(List<Note> notes) {

        return new ArrayList<Note>();

    }

}

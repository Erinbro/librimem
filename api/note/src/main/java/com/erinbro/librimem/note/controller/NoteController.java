package com.erinbro.librimem.note.controller;

import com.erinbro.librimem.note.dto.NoteRequestDto;
import com.erinbro.librimem.note.model.Note;
import com.erinbro.librimem.note.service.NoteService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "api/v1/notes")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Note> saveNote(@Valid @RequestBody NoteRequestDto noteRequestDto) {
        return new ResponseEntity<Note>(noteService.saveNote(noteRequestDto), HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Note>> getAllNotes(Integer entityId, Integer chapterId) {
        return new ResponseEntity<List<Note>>(noteService.getAllNotes(entityId, chapterId), HttpStatus.OK);
    }

    @GetMapping(path = "/{chapterId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Note>> getAllNotesByChatperId(@PathVariable("chapterId") Integer chapterId)  {
        Optional<List<Note>> notes = noteService.getAllNotesByChapterId(chapterId);
        if (notes.isEmpty()){
            throw new RuntimeException("Chapter has no notes");
        }
        else {
            return new ResponseEntity<List<Note>>(notes.get(), HttpStatus.OK);
        }
    }

}

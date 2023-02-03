package com.erinbro.librimem.note.converter;


import com.erinbro.librimem.note.dto.NoteRequestDto;
import com.erinbro.librimem.note.model.Note;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class NoteConverter {


    public NoteRequestDto convertEntityToDto(Note note) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        NoteRequestDto noteRequestDto = modelMapper.map(note, NoteRequestDto.class);
        return noteRequestDto;
    }

    public Note convertDtoToEntity(NoteRequestDto noteRequestDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Note note = modelMapper.map(noteRequestDto, Note.class);
        return note;
    }
}

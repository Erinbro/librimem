package com.erinbro.librimem.note.configuration;

import com.erinbro.librimem.note.dto.NoteRequestDto;
import com.erinbro.librimem.note.model.Note;
import com.erinbro.librimem.note.repository.NoteRepository;
import com.github.javafaker.Faker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Sort;

import java.util.Date;

@Configuration
@Slf4j
public class NoteConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(NoteRepository noteRepository) {
        return args -> {
            generateRandomNotes(noteRepository);
            Sort sort = Sort.by(Sort.Direction.DESC, "createdAt");
            noteRepository.findAll(sort)
                    .forEach(note -> log.info(note.getTitle()));
        };

    }

    private void generateRandomNotes(NoteRepository noteRepository) {
        Faker faker = new Faker();

        for (int i = 0; i < 10; i++) {

            Note note = Note.builder()
                    .title("ntoe titele")
                    .type("chapter")
                    .chapterId(faker.number().numberBetween(1,1000))
                    .entityId(faker.number().numberBetween(1,1000))
                    .note(faker.lorem().sentence(20))
                    .favorite(false)
                    .build();

            noteRepository.save(note);
        }

    }
}

package com.erinbro.librimem.flashcard.configuration;

import com.erinbro.librimem.flashcard.repository.FlashcardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class FlashcardConfiguration {
    @Bean
    CommandLineRunner commandLineRunner(FlashcardRepository flashcardRepository) {
        return args -> {
            log.info("The flashcardRepository class: {}",flashcardRepository.getClass());
        };
    }
}

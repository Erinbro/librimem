package com.erinbro.librimem.flashcard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:flashcard-${spring.profiles.active}.properties")
public class FlashcardApplication {
    public static void main(String[] args) {
        SpringApplication.run(FlashcardApplication.class, args);
    }
}

package com.erinbro.librimem.word;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:")
public class WordApplication {
    public static void main(String[] args) {
        SpringApplication.run(WordApplication.class, args);
    }
}

package com.erinbro.librimem.chapter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:chapter-${spring.profiles.active}.properties")
public class ChapterApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChapterApplication.class, args);
    }
}

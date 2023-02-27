package com.erinbro.librimem.citation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:application-${spring.profiles.active}.yml")
public class CitationApplication {
    public static void main(String[] args) {
        SpringApplication.run(CitationApplication.class);
    }
}

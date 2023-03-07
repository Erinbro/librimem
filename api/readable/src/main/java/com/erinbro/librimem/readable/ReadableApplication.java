package com.erinbro.librimem.readable;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:readable-${spring.profiles.active}.properties")
public class ReadableApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReadableApplication.class, args);
    }
}

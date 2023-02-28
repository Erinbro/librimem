package com.erinbro.librimem.summary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:summary-${spring.profiles.active}.properties")
public class SummaryApplication {
    public static void main(String[] args) {
        SpringApplication.run(SummaryApplication.class);
    }
}

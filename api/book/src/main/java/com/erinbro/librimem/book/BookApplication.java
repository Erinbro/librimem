package com.erinbro.librimem.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.core.env.Environment;

@SpringBootApplication(
        scanBasePackages = "com.erinbro.librimem.book"
)
@EnableFeignClients()
public class BookApplication {
    public static void main(String[] args) {
        SpringApplication.run(BookApplication.class,args);
    }

    @Autowired
    private Environment env;

    @Bean
    CommandLineRunner commandLineRunner() {
        return args -> {
            System.out.println("url: " + env.getProperty("clients.chapter.url"));
        };
    }
}

package com.erinbro.librimem.book.config;


import com.erinbro.librimem.book.infoapp.InfoApp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class BookConfiguration {

    private final static Logger LOGGER = LoggerFactory.getLogger(BookConfiguration.class);

    @Value("${info.company.name}")
    private String companyName;

    @Autowired
    private Environment environment;

    @Bean
    CommandLineRunner commandLineRunner(InfoApp infoApp) {
        return args -> {
           LOGGER.info("$The company name is {}", companyName);
           LOGGER.info(infoApp.toString());
        };
    }
}

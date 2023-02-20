package com.erinbro.librimem.http.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

public class UserClient {
    private WebClient webClient;

    @Value("${clients.user}")
    private String baseUrl;

    UserClient(WebClient.Builder builder) {
        this.webClient = builder.baseUrl(baseUrl)
                .build();
    }

}

package com.erinbro.librimem.clients.webclient.book;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.reactive.function.client.WebClient;

public class BookClient {

    @Value("${clients.book.url}")
    private String url;

    private final WebClient webClient;

    BookClient(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(url).build();
    }



}

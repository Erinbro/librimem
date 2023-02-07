package com.erinbro.librimem.clients.webclient.chapter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Slf4j
public class ChapterClient {

    private WebClient webClient;

    @Value("${clients.chapter.url")
    private String url;


    public Mono<ChapterDeleteResponse> deleteAllChaptersFromBook(int bookId){
        return webClient.delete().uri(url+"/book/" + bookId)
                .retrieve()
                .bodyToMono(ChapterDeleteResponse.class);
    }
}

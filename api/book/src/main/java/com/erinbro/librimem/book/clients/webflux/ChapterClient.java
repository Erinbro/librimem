package com.erinbro.librimem.book.clients.webflux;

import com.erinbro.librimem.book.clients.ChapterDeleteResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class ChapterClient {
    private final WebClient webClient;

    @Value("${clients.chapter.url}")
    private String clientUrl;

    @Autowired
    private Environment environment;

    public ChapterClient(WebClient.Builder builder,
                         Environment environment) {
        this.environment = environment;
        this.webClient = builder.baseUrl(this.clientUrl)
                .build();
    }

    public Mono<ChapterDeleteResponse> deleteAllChaptersFromBook(int id) {
        return this.webClient.delete().uri("/book/" + id).retrieve()
                .bodyToMono(ChapterDeleteResponse.class);
    }

}

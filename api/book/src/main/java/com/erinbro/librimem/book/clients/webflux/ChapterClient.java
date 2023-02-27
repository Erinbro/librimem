package com.erinbro.librimem.book.clients.webflux;

import com.erinbro.librimem.book.clients.ChapterDeleteResponse;
import lombok.RequiredArgsConstructor;
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

    public ChapterClient(WebClient.Builder builder
    ) {
        this.webClient = builder.baseUrl(this.clientUrl)
                .build();
    }

    public ChapterDeleteResponse deleteAllChaptersFromBook(int id) {
        ChapterDeleteResponse res = this.webClient.delete().uri("/book/" + id).retrieve()
                .bodyToMono(ChapterDeleteResponse.class).block();

        return res;
    }

}

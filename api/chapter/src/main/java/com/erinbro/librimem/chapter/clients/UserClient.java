package com.erinbro.librimem.chapter.clients;

import com.erinbro.librimem.chapter.dto.AuthorizationRequestDto;
import com.erinbro.librimem.chapter.dto.AuthorizationResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@Slf4j
public class UserClient {
    private final WebClient webClient;

    @Value("${clients.user.url}")
    private String userUrl;

    public UserClient(WebClient.Builder builder) {
        this.webClient = builder.build();
    }

    public AuthorizationResponseDto authorizeRequest(AuthorizationRequestDto req) {

        AuthorizationResponseDto response = this.webClient.post()
                .uri(this.userUrl + "/authorize")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(req))
                .header("Authorization", "Bearer " + req.getToken())
                .retrieve()
                .bodyToMono(AuthorizationResponseDto.class)
                .block();

        return response;
    }
}

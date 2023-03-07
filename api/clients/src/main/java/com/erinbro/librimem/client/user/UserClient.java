package com.erinbro.librimem.client.user;

import com.erinbro.librimem.client.dto.AuthorizationRequestDto;
import com.erinbro.librimem.client.dto.AuthorizationResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@RequiredArgsConstructor
public class UserClient {
    private final WebClient webClient;

    String clientUrl;

    public UserClient(String clientUrl) {
        this.clientUrl = clientUrl;
        this.webClient = WebClient.builder().build();
    }

    public AuthorizationResponseDto authorizeRequest(AuthorizationRequestDto req) {
        System.out.println("url: " + this.clientUrl);

        AuthorizationResponseDto response = this.webClient.post().uri(this.clientUrl + "/authorize")
                .contentType(MediaType.APPLICATION_JSON)
                .body(
                        // BodyInserters.fromFormData(bodyValues)
                        BodyInserters.fromValue(req)
                )
                .header("Authorization", "Bearer " + req.getToken())
                .retrieve()
                .bodyToMono(AuthorizationResponseDto.class)
                .block();

        return response;
    }
}

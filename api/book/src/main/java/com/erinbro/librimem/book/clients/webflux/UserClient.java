package com.erinbro.librimem.book.clients.webflux;


import com.erinbro.librimem.book.dto.AuthorizationRequestDto;
import com.erinbro.librimem.book.dto.AuthorizationResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

/**
 * Authenticates the request
 */
@Component
@Slf4j
public class UserClient {

    private final WebClient webClient;

    @Value("${clients.user.url}")
    private String clientUrl;


    public UserClient(WebClient.Builder builder) {
        this.webClient = builder.build();
    }

    public AuthorizationResponseDto authorizeRequest(AuthorizationRequestDto req) {
        log.info("Initiating Authorization request");
        log.info("clientUrl {}", clientUrl);
        MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();

        bodyValues.add("token", req.getToken());

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

package com.erinbro.librimem.readable.service;

import com.erinbro.librimem.client.dto.AuthorizationRequestDto;
import com.erinbro.librimem.client.dto.AuthorizationResponseDto;
import com.erinbro.librimem.client.user.UserClient;
import com.erinbro.librimem.readable.model.Readable;
import com.erinbro.librimem.readable.repository.ReadableRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReadableService {

    private final ReadableRepository readableRepository;

    @Value("${clients.user.url}")
    String clientUrl;

    private int getUserData(String token) {
        UserClient userClient = new UserClient(this.clientUrl);
        AuthorizationResponseDto res = userClient.authorizeRequest(AuthorizationRequestDto.builder().token(token).build());
        return res.getUserId();
    }

    public Readable addReadable(Readable readable, String token) {
        int userId = getUserData(token);
        readable.setUserId(userId);
        return readableRepository.save(readable);
    }

    public Readable getReadable(int entityId, String token) {
        int userId = getUserData(token);
        // FIXME Add Exception if userId was not found
        var readable = readableRepository.findReadableByEntityId(Integer.toString(entityId));
        // FIXME Add exepction if readable was not found
        return readable.get();
    }

    public void updateReadable() {

    }

    public void deleteReadable() {

    }


}

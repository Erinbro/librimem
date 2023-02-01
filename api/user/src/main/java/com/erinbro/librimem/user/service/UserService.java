package com.erinbro.librimem.user.service;

import com.erinbro.librimem.user.dto.UserLoginRequest;
import com.erinbro.librimem.user.dto.UserRegistrationRequest;
import com.erinbro.librimem.user.model.User;
import com.erinbro.librimem.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    public void register(UserRegistrationRequest req) {
        LOGGER.info("data: " + req.getEmail() + req.getName()  + req.getPassword());

        User newUser =
        User.builder()
                .email(req.getEmail())
                .name(req.getName())
                // TODO hash password
                .password(req.getPassword())
                        .build();

        userRepository.save(newUser);
        LOGGER.info("User " + newUser.getName() + " registered");
    }

    public void login(UserLoginRequest req) {
        LOGGER.info("login");
    }
}

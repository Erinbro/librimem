package com.erinbro.librimem.user.controller;

import com.erinbro.librimem.user.dto.UserLoginRequest;
import com.erinbro.librimem.user.dto.UserRegistrationRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.erinbro.librimem.user.service.UserService;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(path = "register")
    public void register( @Valid @RequestBody UserRegistrationRequest req) {
        userService.register(req);
    }

    @PostMapping(path = "login")
    public void login(@Valid @RequestBody UserLoginRequest req) {
        userService.login(req);
    }

    /**
     * Authorizes a request
     */
    @GetMapping()
    public void authorize() {

    }

}

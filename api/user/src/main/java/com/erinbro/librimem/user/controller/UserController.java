package com.erinbro.librimem.user.controller;

import com.erinbro.librimem.user.dto.AuthenticationRequest;
import com.erinbro.librimem.user.dto.AuthenticationResponse;
import com.erinbro.librimem.user.dto.RegistrationRequest;
import com.erinbro.librimem.user.dto.UserLoginRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.erinbro.librimem.user.service.UserService;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(path = "register")
    public ResponseEntity<AuthenticationResponse> register(@Valid @RequestBody RegistrationRequest req) {
        return ResponseEntity.ok(userService.register(req));
    }

    @PostMapping(path = "login")
    public void login(@Valid @RequestBody UserLoginRequest req) {
        userService.login(req);
    }

    @PostMapping(path = "authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(userService.authenticate(request));
    }


//    @PostMapping(path = "oauth2/callback")
//    public void callback() {
//
//    }

}

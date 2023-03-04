package com.erinbro.librimem.user.controller;

import com.erinbro.librimem.user.dto.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.erinbro.librimem.user.service.UserService;

@Slf4j
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(path = "register")
    public ResponseEntity<AuthenticationResponse> register(@Valid @RequestBody RegistrationRequest req) {
        return ResponseEntity.ok(userService.register(req));
    }


    // NOTE Login
    @PostMapping(path = "authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        System.out.println("in authenticate route");
        var res = userService.authenticate(request);
        log.info("res: {}", res);

        return ResponseEntity.ok(res);
    }

    @PostMapping(path = "authorize")
    public ResponseEntity<AuthorizationResponse> authorize(
            @RequestBody AuthorizationRequest request
    ) throws Exception {
        AuthorizationResponse res = userService.authorize(request);

        return ResponseEntity.ok(res);
    }


//    @PostMapping(path = "oauth2/callback")
//    public void callback() {
//
//    }

}

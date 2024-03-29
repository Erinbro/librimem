package com.erinbro.librimem.user.service;

import com.erinbro.librimem.user.configuration.JwtService;
import com.erinbro.librimem.user.dto.*;
import com.erinbro.librimem.user.model.Role;
import com.erinbro.librimem.user.model.User;
import com.erinbro.librimem.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.getUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }

    public AuthenticationResponse register(RegistrationRequest req) {
        LOGGER.info("data: " + req.getUsername());

        User newUser =
                User.builder()
                        .username(req.getUsername())
                        // TODO hash password
                        .password(
                                passwordEncoder.encode(
                                        req.getPassword()
                                )
                        )

                        .role(Role.USER)
                        .enabled(true)
                        .build();

        userRepository.save(newUser);
        LOGGER.info("User " + newUser.getUsername() + " registered");

        var jwtToken = jwtService.generateToken(newUser);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {


        var user = userRepository.getUserByUsername(request.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthorizationResponse authorize(AuthorizationRequest request) throws Exception {
        String token = request.getToken();
        String username = jwtService.extractUsername(token);
        var user = userRepository.getUserByUsername(username);
        // If we got the user
        if (!user.isPresent()) throw new Exception("User not found");

        AuthorizationResponse res = AuthorizationResponse.builder()
                .userId(user.get().getId())
                .username(user.get().getUsername())
                .build();

        return res;
    }

    // NOTE For OAuth2
    public void processOAuthPostLogin(String username) {

    }
}

package com.taskflowai.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.taskflowai.backend.dto.LoginRequest;
import com.taskflowai.backend.dto.RegisterRequest;
import com.taskflowai.backend.model.User;
import com.taskflowai.backend.repository.UserRepository;
import com.taskflowai.backend.security.JwtService;

@Service
public class AuthService 
{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String register(RegisterRequest request) 
    {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        User user = new User();

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        user.setPassword(
            passwordEncoder.encode(request.getPassword())
        );

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public String login(LoginRequest request) 
    {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        boolean passwordMatches =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatches) {
            return "Invalid Password";
        }

        return jwtService.generateToken(user.getEmail());
    }
}
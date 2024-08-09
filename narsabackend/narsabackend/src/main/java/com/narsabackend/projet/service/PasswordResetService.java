package com.narsabackend.projet.service;

import com.narsabackend.projet.entity.PasswordResetRequest;
import com.narsabackend.projet.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.narsabackend.projet.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;


@Service
public class PasswordResetService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean resetPassword(PasswordResetRequest request) {
        // Récupérer l'utilisateur authentifié
        String currentUserName = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUserName(currentUserName);

        if (user != null && passwordEncoder.matches(request.getOldPassword(), user.getUserPassword())) {
            user.setUserPassword(passwordEncoder.encode(request.getNewPassword()));
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

}


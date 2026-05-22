package com.taskflowai.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskflowai.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> 
{
    Optional<User> findByEmail(String email);
}
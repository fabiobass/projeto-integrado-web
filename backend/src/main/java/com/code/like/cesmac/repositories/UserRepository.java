package com.code.like.cesmac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.like.cesmac.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}

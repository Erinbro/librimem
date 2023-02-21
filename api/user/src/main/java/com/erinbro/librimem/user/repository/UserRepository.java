package com.erinbro.librimem.user.repository;

import com.erinbro.librimem.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT  u FROM Users u WHERE u.username = :username")
    public Optional<User> getUserByUsername(@Param("username") String username);
}

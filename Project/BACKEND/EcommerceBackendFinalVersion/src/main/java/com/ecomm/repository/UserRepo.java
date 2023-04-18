package com.ecomm.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.Role;
import com.ecomm.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

//	Optional<User> find
	List<User> findByRole(Role customer);
	User findByEmail(String email);
//	@Query("SELECT u FROM User u JOIN u.userInfo ui WHERE ui.email = :email AND u.password = :password")
//    User findByEmailAndPassword(String email,String pass );	
	User findByEmailAndPassword(String email,String pass);
}

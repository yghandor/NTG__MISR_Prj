package org.ntg.training.backendForPortal.controllers;

import org.ntg.training.backendForPortal.dto.GenricResponse;
import org.ntg.training.backendForPortal.dto.LoginRequest;
import org.ntg.training.backendForPortal.dto.LoginResponse;
import org.ntg.training.backendForPortal.entities.users;
import org.ntg.training.backendForPortal.repos.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class MainAPI {

    @Autowired
    private UsersRepo _usersRepo;

    @GetMapping("/hello")
    public String Hello() {
        return "Hello World";
    }

    @GetMapping("/users/list")
    Iterable<users> getUsersList() {
        return this._usersRepo.findAll();
    }

    @PostMapping("/auth/login")
    LoginResponse Login(@RequestBody LoginRequest _req) {

        try {

            users row = this._usersRepo.findByUserNameAndPassword(_req.getUser_name(), _req.getPassword());

            if (row == null) {
                return new LoginResponse(null, "Invalid User Name Or Password");
            } else {
                return new LoginResponse(row.getFullName(), null);
            }


        } catch (Exception ex) {
            return new LoginResponse(null, ex.getMessage());
        }


    }

    @PostMapping("/addUser")
    GenricResponse AddUser(@RequestBody users user) {
        try {

            user.setPassword("ntg");

            users addedUser = this._usersRepo.save(user);

            return new GenricResponse(null,addedUser);

        } catch (Exception ex) {
            return new GenricResponse(ex.getMessage(), null);
        }

    }
}

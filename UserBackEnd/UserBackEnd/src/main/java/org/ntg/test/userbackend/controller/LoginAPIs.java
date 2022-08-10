package org.ntg.test.userbackend.controller;


import org.ntg.test.userbackend.dto.LoginRequest;
import org.ntg.test.userbackend.dto.LoginResponse;
import org.ntg.test.userbackend.entities.Users;
import org.ntg.test.userbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class LoginAPIs {


    @Autowired
    UserRepo _userRepo;



    @GetMapping("/Hello")
    public String Hello(){
        return "Hello World";
    }

    @GetMapping("/users")
    public Iterable<Users> getUsers(){
        return _userRepo.findByName("admin");
    }


    @PostMapping("/login")
    LoginResponse LogUser(@RequestBody() LoginRequest _loginInfo){

        try{
                Thread.sleep(2000);
            Users row = this._userRepo.findByNameAndPassword(_loginInfo.getUserName(), _loginInfo.getPassword());
            if(row ==null){
                return  new LoginResponse(null,"Invalid User Name Or Password !");
            }else{
                return  new LoginResponse(row.getFullNamed(),null);
            }

        }catch (Exception ex){
            return new LoginResponse(null,ex.getMessage());
        }

    }

}

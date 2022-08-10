package org.ntg.test.userbackend.entities;


import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue
    @Column(name = "recID")
    private Long id;

    @Column(name = "userName")
    private String name;


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "password")
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullNamed() {
        return fullNamed;
    }

    public void setFullNamed(String fullNamed) {
        this.fullNamed = fullNamed;
    }

    @Column(name = "fullNamed")
    private String fullNamed;



    public void setId(Long id) {
        this.id = id;
    }



    public Long getId() {
        return id;
    }
}

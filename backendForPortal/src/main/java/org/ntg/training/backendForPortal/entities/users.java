package org.ntg.training.backendForPortal.entities;

import javax.persistence.*;

@Entity
@Table(name = "admin_users")
public class users {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long recID;

    @Column(name = "user_name")
    private String userName;

    public long getManager_id() {
        return (manager_id == null) ? -1 : manager_id;
    }

    public void setManager_id(Long manager_id) {
        this.manager_id = (manager_id == null) ? null : (manager_id == -1) ? null : manager_id;
    }

    @Column(name = "manager_id")
    private Long manager_id;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    private String password;

    private String fullName;

    public void setRecID(Long recID) {
        this.recID = (recID == null) ? null : (recID == -1) ? null : recID;
    }


    public Long getRecID() {
        return recID;
    }
}

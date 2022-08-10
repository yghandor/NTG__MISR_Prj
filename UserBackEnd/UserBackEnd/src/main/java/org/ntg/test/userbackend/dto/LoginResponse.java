package org.ntg.test.userbackend.dto;

public class LoginResponse {

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public LoginResponse() {
    }

    public LoginResponse(String fullName, String errorMessage) {
        this.fullName = fullName;
        this.errorMessage = errorMessage;
    }

    private String fullName;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    private String errorMessage;

}

package org.ntg.training.backendForPortal.dto;

public class GenricResponse {
    public GenricResponse() {
    }

    public String getErrorMessage() {
        return ErrorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        ErrorMessage = errorMessage;
    }

    public Object getReturnValue() {
        return returnValue;
    }

    public void setReturnValue(Object returnValue) {
        this.returnValue = returnValue;
    }

    public GenricResponse(String errorMessage, Object returnValue) {
        ErrorMessage = errorMessage;
        this.returnValue = returnValue;
    }

    private String ErrorMessage;
    private Object returnValue;
}

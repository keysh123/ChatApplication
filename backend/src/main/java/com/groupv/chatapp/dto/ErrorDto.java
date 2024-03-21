package com.groupv.chatapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ErrorDto {

    Object error;
    int status;
    boolean success = false;

    public ErrorDto(String error,int status){
        this.error= error;
        this.status = status;
    }
}

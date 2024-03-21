package com.groupv.chatapp.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SuccessDto {
    Object data;
    int status;
    boolean success = true;

    public SuccessDto(Object o,int status){
        this.data = o;
        this.status = status;
    }
}

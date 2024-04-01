package com.groupv.chatapp.advice;

import com.groupv.chatapp.exception.DoesNotExistException;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApplicationExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<?> handleInvalidArgument(MethodArgumentNotValidException e){
        HashMap<String, Object> map = new HashMap<>();

        String errorMessage = e.getBindingResult().getFieldErrors().stream()
                .map(FieldError::getDefaultMessage)
                .collect(Collectors.joining("|"));

        e.getBindingResult().getFieldErrors().forEach(error->{
            map.put(error.getField(), error.getDefaultMessage());
        });
        map.put("error",errorMessage);
        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.NOT_ACCEPTABLE);
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler({DuplicateKeyException.class})
    public ResponseEntity<?> handleDuplicateKey(DuplicateKeyException e){
        HashMap<String, Object> map = new HashMap<>();

        map.put("error",e.getMessage());
        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.CONFLICT);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({DoesNotExistException.class})
    public ResponseEntity<?> handleNotExist(DoesNotExistException e){
        HashMap<String, Object> map = new HashMap<>();

        map.put("error",e.getMessage());
        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler({ExpiredJwtException.class})
    public ResponseEntity<?> handleExpire(ExpiredJwtException e){
        HashMap<String, Object> map = new HashMap<>();

        map.put("error",e.getMessage());
        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
    }
}



package com.groupv.chatapp.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.groupv.chatapp.dto.ErrorDto;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final UserDetailsService userDetailService;
    private final ObjectMapper mapper;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(
            @NotNull HttpServletRequest request,
            @NotNull HttpServletResponse response,
            @NotNull FilterChain filterChain
    ) throws ServletException, IOException {
        System.out.println("__________________________________Filter____________________________________________________");
        String jwt = null;
        Cookie[] cookies = request.getCookies();
        Cookie authCookie = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                System.out.println(cookie.getName());
                if (cookie.getName().equals("Authorization")) {
                    authCookie = cookie;
                    jwt = cookie.getValue();
                    break;
                }
            }
        }
        System.out.println(jwt);
        if (jwt == null) {
//            sendError(response);
            filterChain.doFilter(request, response);
            return;
        }

        final String username;
        username = jwtService.extractUsername(jwt);
        System.out.println(username);
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            System.out.println("qwertyuioplkjhgfdsazxcvbnm");
            UserDetails userDetails = userDetailService.loadUserByUsername(username);
            System.out.println("qwertyuioplkjhgfdsazxcvbnm");
            if (jwtService.isTokenValid(jwt, userDetails)) {
                request.setAttribute("username", username);
                System.out.println("Username set-----------+++++++++++++++++++++++++++++++++++++");
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );

                authenticationToken.setDetails(
                        new WebAuthenticationDetailsSource()
                                .buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            } else {
                authCookie.setMaxAge(0);
                response.addCookie(authCookie);
                sendError(response);
            }
        }
        filterChain.doFilter(request, response);
    }

    private void sendError(HttpServletResponse response) throws IOException {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        mapper.writeValue(response.getWriter(), new ErrorDto("Forbidden", HttpStatus.FORBIDDEN.value()));
    }
}

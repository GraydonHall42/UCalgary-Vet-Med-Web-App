package com.springboot.app.springbootbackend.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SimpleFilterConfiguration {
    public SimpleFilterConfiguration(ObjectMapper objectMapper) {
        SimpleFilterProvider simpleFilterProvider = new SimpleFilterProvider().setFailOnUnknownId(false);
        objectMapper.setFilterProvider(simpleFilterProvider);
    }
}
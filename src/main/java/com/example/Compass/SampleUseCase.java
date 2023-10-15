package com.example.Compass;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

@Transactional
@Service
public class SampleUseCase {

    @Autowired
    private SampleRepository sampleRepository;

    public List<Sample> execute() {
        return sampleRepository.findAll();
    }
}

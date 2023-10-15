package com.example.Compass;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MainRestController {

    @Autowired
    private SampleUseCase sampleUseCase;

    /**
     * 文字列を返却するサンプル
     * 
     * @return 文字列
     */
    @GetMapping("sample")
    public String retStringSample() {
        return "Spring Boot";
    }

    /**
     * DBとの疎通確認用サンプル
     * 
     * @return List<Sample>
     */
    @GetMapping("sample_db")
    public List<Sample> retDbSample() {
        return sampleUseCase.execute();
    }

}

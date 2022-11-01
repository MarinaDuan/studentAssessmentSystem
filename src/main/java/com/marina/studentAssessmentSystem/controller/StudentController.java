package com.marina.studentAssessmentSystem.controller;

import com.marina.studentAssessmentSystem.model.Student;
import com.marina.studentAssessmentSystem.service.Service;
import com.marina.studentAssessmentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private Service service;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        service.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return service.getAllStudents();
    }
}

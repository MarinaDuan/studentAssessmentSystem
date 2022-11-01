package com.marina.studentAssessmentSystem.service;

import com.marina.studentAssessmentSystem.model.Student;
import com.marina.studentAssessmentSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.marina.studentAssessmentSystem.model.Student;

import java.util.List;
@org.springframework.stereotype.Service
public class StudentService implements Service{

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}

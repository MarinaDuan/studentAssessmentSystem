package com.marina.studentAssessmentSystem.service;

import com.marina.studentAssessmentSystem.model.Student;

import java.util.List;

public interface Service {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}

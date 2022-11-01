import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Student() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const[studentName,setStudentName]=useState('')
  const[courseId,setCourseId]=useState('')
  const[students,setStudents]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const student={studentName,courseId}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New student added.")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    })
  },[])
  
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <h1><u>Add Student</u></h1>
        <Paper elevation={3} style={paperStyle}>
          
          <TextField
            required
            id="outlined-required"
            label="Student Name"
            value={studentName}
            onChange={(e)=>setStudentName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Course Id"
            value={courseId}
            onChange={(e)=>setCourseId(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>Submit</Button>
        </Paper>

        <h1><u>Enrolled Students</u></h1>
        <Paper elevation={3} style={paperStyle}>
          {students.map(student => (
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.studentId}>
              Student ID:{student.studentId}<br />
              Name:{student.studentName}<br />
              Course ID:{student.courseId}
            </Paper>
          ))}

        </Paper>
      </Container>
    </Box>
  );
}

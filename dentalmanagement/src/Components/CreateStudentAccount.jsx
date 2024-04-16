import React, { useState } from "react";
import Nav from "./Nav";
import '../CSS/CreatingAccount.css';
import axios from "axios";

function CreateStudentAccount(){
    const [idnumber, setIdnumber] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");
    const [courses, setCourses] = useState([]);
    const [year, setYear] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = async () => {
        // Check if any of the required fields are empty
        if (!idnumber || !firstname || !lastname || !department || !birthdate || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }    

        const student_data = {
            idNumber: idnumber,
            firstname: firstname,
            lastname: lastname,
            studentDepartment: department,
            studentCourse: course,
            studentYear: year,
            studentBirthdate: birthdate,
            studentEmail: email,
            studentPassword: password
        }
            try {
                const response = await axios.post("http://localhost:8080/dentalmanagement/insertStudent", student_data);
                console.log(response.data);
                console.log("Submitted!");
                alert("Data submitted successfully!");
            } catch (error) {
                console.error(error);
            }

            setIdnumber("");
            setFirstname("");
            setLastname("");
            setDepartment("");
            setCourse("");
            setYear("");
            setBirthdate("");
            setEmail("");
            setPassword("");
        };

        const handleDepartmentChange = (e) => {
            const selectedDepartment = e.target.value;
            setDepartment(selectedDepartment);
            // Set the courses based on the selected department
            if (selectedDepartment === "engineering") {
                setCourses(["BS Architecture", "BS Chemical Engineering", 
                            "BS Civil Engineering", "BS Computer Engineering", 
                            "BS Electrical Engineering", "BS Electronics Engineering",
                            "BS Industrial Engineering", "BS Mechanical Engineering with Computational Science",
                            "BS Mechanical Engineering with Mechatronics", "BS Mining Engineering"]);
            }else if (selectedDepartment === "accountancy") {
                setCourses(["BS Accountancy", "BS Accounting Information Systems",
                            "BS Management Accounting", "BS Business Administration",
                            "BS Hospitality Management", "BS Tourism Management",
                            "BS Office Administration", "Bachelor in Public Administration"]);
            } else if (selectedDepartment === "arts") {
                setCourses(["AB Communication", "AB English with Applied Linguistics", 
                            "Bachelor of Elementary Education",
                            "Bachelor of Secondary Education Major in English",
                            "Bachelor of Secondary Education Major in Filipino", 
                            "Bachelor of Secondary Education Major in Mathematics",
                            "Bachelor of Secondary Education Major in Science"]);
            } else if (selectedDepartment === "nursing") {
                setCourses(["BS Nursing", "BS Pharmacy"]);
            } else if (selectedDepartment === "ccs") {
                setCourses(["BS Computer Science", "BS Information Technology"]);
            }else if (selectedDepartment === "ccj") {
                setCourses(["BS Criminology"]);
            }else {
                // If no department is selected, reset the courses
                setCourses([]);
            }
        };

        const handleCourseChange = (e) => {
            setCourse(e.target.value);
        };

        const handleYearChange = (event) => {
            setYear(event.target.value);
        };

    return(
        <>
            <center>
            <Nav />
            <div className="container">
                <div className="red-rectangle">
                    <div className="h1-holder">
                        <h1>Create Student Account</h1>
                    </div>
                    <div className="input-container">
                    <input 
                        type='text' 
                        placeholder='Enter ID number'  
                        className='input'
                        value={idnumber}
                        onChange={(e) => setIdnumber(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Firstname'  
                        className='input'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Lastname'  
                        className='input'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <select
                        value={department}
                        onChange={handleDepartmentChange}
                        className='input'
                    >
                        <option value="">Select Department...</option>
                        <option value="engineering">College of Engineering and Architecture</option>
                        <option value="accountancy">College of Management, Business and Accountancy</option>
                        <option value="arts">College of Arts, Sciences, and Education</option>
                        <option value="nursing">College of Nursing and Allied Health Sciences</option>
                        <option value="ccs">College of Computer Studies</option>
                        <option value="ccj">College of Criminal Justice</option>
                    </select>
                    <select
                        className='input'
                        value={course}
                        onChange={handleCourseChange}
                        disabled={courses.length === 0} // Disable the course dropdown if no courses are available
                    >
                        <option value="">Select Course...</option>
                        {courses.map((courseOption, index) => (
                            <option key={index} value={courseOption}>
                                {courseOption}
                            </option>
                        ))}
                    </select>
                    <select
                        value={year}
                        onChange={handleYearChange}
                        className='input'
                    >
                        <option value="">Select Year...</option>
                        <option value="firstyear">First Year</option>
                        <option value="secondyear">Second Year</option>
                        <option value="thirdyear">Third Year</option>
                        <option value="fourthyear">Fourth Year</option>
                        {/* Add more options as needed */}
                    </select>
                    <input 
                        type= 'date'
                        placeholder='Select Birthdate'  
                        className='input'
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Email'  
                        className='input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        placeholder='Enter Password'  
                        className='input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="button-container">
                        <button className="button" type="submit" onClick={handleChange}>Create Account</button>
                    </div>
                </div>
                
            </div>
            </center>
        </>
    );
}
export default CreateStudentAccount;
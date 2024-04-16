import React from "react";
import Nav from "./Nav";
import '../CSS/CreatingAccount.css';


function CreateDoctorAccount(){
    return(
        <>
            <Nav />
            <center>
            <div className="container">
                <div className="red-rectangle">
                    <div className="h1-holder">
                        <h1>Create Doctor Account</h1>
                    </div>
                    <div className="input-container">
                    <input 
                        type='text' 
                        placeholder='Enter ID number'  
                        className='input'
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Firstname'  
                        className='input'
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Lastname'  
                        className='input'
                    />
                    <input 
                        type='date' 
                        placeholder='Enter Birthdate'  
                        className='input'
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Email'  
                        className='input'
                    />
                    <input 
                        type='password' 
                        placeholder='Enter Password'  
                        className='input'
                    />
                    </div>
                    <div className="button-container">
                        <button className="button" type="submit">Create Account</button>
                    </div>
                </div>
                
            </div>
            </center>
        </>
    );
}
export default CreateDoctorAccount;
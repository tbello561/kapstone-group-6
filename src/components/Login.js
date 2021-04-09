import React from "react"
import{useState, useEffect} from "react"

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    
    function submitHandler(e) {
        e.preventDefault()
        fetch("http://localhost:3001"), {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        }
    }
    
    
    return (
        <form onSubmit={submitHandler}>
        <label>Username:</label>
        <input
            type="text"
            value={formData.username}
            onChange={e => setFormData((prevFormData)=>{
                return{ ...prevFormData, username: e.target.value }
            })
        }
        />
        <label>Password:</label>
        <input
            type="password"
            value={formData.password}
            onChange={e => setFormData((prevFormData)=>{
                return{ ...prevFormData, password: e.target.value }
            })
        }
        />
        <button type="submit">submit</button>
    </form>)
}



export default Login


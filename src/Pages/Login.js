import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
// import { navigate } from '@reach/router';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [warning, setWarning] = useState(0);

    useEffect(() => {
        
    }, [warning])

    const loginFunction = () =>{
        
        if(userName == "Nikhil" && password == 123){
            sessionStorage.setItem('userId', 1);
            navigate('/');
        }else if(userName == "Admin" && password == "Admin"){
            sessionStorage.setItem('userId', 0);
            navigate('/');
        }else{
            setWarning(1);
            setTimeout(() => {
                setWarning(0)
            }, 3500)
        }
    }
    return (    
        <div className="loginDiv w-[500px] h-[300px] rounded-[7px] m-[auto] flex flex-col py-10">
            <p className="text-white text-center">UserName is Nikhil and Password is 123</p>
            <input 
                type="text" 
                placeholder="Username" 
                className=" w-[300px] h-[40px] mx-[auto]"
                onChange={(e) => setUserName(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                className=" w-[300px] h-[40px] mx-[auto] mt-8"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type="submit" 
                value="LOGIN"
                className="bg-blue-600 border-2 text-white w-[100px] h-[40px] mt-4 m-[auto] cursor-pointer" 
                onClick={loginFunction}
            />
            {
                warning == 1 ?
                    <div 
                        className=" text-red-500 font-bold w-[250px] text-center m-[auto]"
                    > 
                        Wrong UserName or Password
                    </div>
                : null
            }
            
        </div>
    )
}

export default Login;
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiEyeOff, FiEye} from 'react-icons/fi'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navigate = useNavigate()
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const onShowPaaword =()=>{
    setShowPassword(!showPassword)
  }

 
  const onSubmitBtn = (e) => {
    e.preventDefault();

    const userData = {
      employeeId: employeeId,
      password: password,
    };

    if (employeeId && password !== "") {
      axios
        .post("http://localhost:7010/login", userData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            let empType = response.data.empType;
            localStorage.setItem("token", jwtToken);
            localStorage.setItem("employeType", empType);
            if (empType === "Admin") {
                navigate("/admin");
              } 
            if(empType === 'Trainer'){
              navigate("/trainer");
            }
            if(empType === 'Trainee'){
              navigate('/trainee')
            }
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          toast.error(error.response.data.message);
        });
    } else {
      toast.warning("Please enter req details");
}
};

    return (
      <div>
        <ToastContainer />
        <div className="container login_page">
          <div className="card login_card">
            <div className="container">
              <div className="row">
                <div className="col-md-4 m-auto">
                  <div className="logo">
                    <img
                      src="./images/Perfexlogo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="login_form">
                    <h1 className="text-center login_head">
                      <i class="ri-user-line pr-2"></i>Login
                    </h1>
                    <div className="mt-4 mb-4">
                      <input
                        type="text"
                        placeholder="Enter Employee Id"
                        className="form-control"
                        value={employeeId}
                        onChange={((e)=>setEmployeeId(e.target.value))}
                        
                      />
                      
                      
                    </div>
                    <div className=" d-flex mt-4 mb-4">
                      <input
                        type={showPassword ? "text":"password"}
                        placeholder="Enter Employee Password"
                        className="form-control"
                        value={password}
                        onChange={((e)=>setPassword(e.target.value))}
                      />
                      <button className="" onClick={onShowPaaword}>
                       {showPassword ? <FiEyeOff/>:<FiEye/> }
                      </button>
                    </div>
                    <div className="text-right">
                      <button type="button" onClick={onSubmitBtn}>Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="containers">
      <div className="form-conatiner">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input placeholder="Email Address" type="email" class="form-control" id="exampleFormControlInput1"></input> 
              <input placeholder="Password" type="password"class="form-control" id="exampleFormControlInput1"></input> 
              <a href="#">Forgot Password?</a> 
              <button onClick={()=> navigate("http://localhost:5174/")} >Login</button> <br></br>
              <p>
                Not a member?<a href="#" onClick={() => setIsLogin(false)}> Signup now</a>
              </p>
            </div>
          </>
        ) : (
          <><div className="form">
            <h2>Signup Form</h2>
            <input placeholder="Name" type="name" class="form-control" id="exampleFormControlInput1"></input> 
            <input placeholder="Email Address" type="email" class="form-control" id="exampleFormControlInput1"></input> 
            <input placeholder="Password" type="password" class="form-control" id="exampleFormControlInput1"></input> 
            <input placeholder="Confirm Password" type="password" class="form-control" id="exampleFormControlInput1"></input>{" "}
            <button onClick={()=> navigate("http://localhost:5174/")}>Signup</button> <br></br>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;

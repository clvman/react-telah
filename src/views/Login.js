import React, { useState } from "react";
import { Container, Row, Col } from "shards-react";

function Login(props) {
  const [state , setState] = useState({
      email : "",
      password : "",
      successMessage: null,
      errors: {
        email: "",
        password: "",
      },
      loginState: ""
  })

  const handleChange = (event) => {
      const {id , value} = event.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }));
  }


  const onLoginSubmit = (e) => {
      props.history.push('/dashboard');
  }

  return(
    <div className="login-container">
      <Row className="login-row">
        <Col lg="7" md="7" sm="12" className="login-img">
          <div className="d-flex justify-content-center align-items-center offset-md-1 col-md-7 login-sub-img ">
            <div className="flex-column">
              <img className="login-chief" src={require("../images/chief.png")} />
              <div className="login-text-title">Managing your Estate just got easier</div>
              <div className="login-text-content">Record payments and expenses, track down debtors and download your financial report using TELAH</div>            
            </div>
          </div>
        </Col>
        <Col lg="5" md="5" sm="12" className="login-field d-flex align-items-center">
          <div className="d-flex flex-column" >
            <img
              className="login-logo"
              src={require("../images/logo2.png")}
              alt="Shards Dashboard"
            />
            <p className="login-p">Join our community of facility managers as we help you manage your property units with ease</p>
            <input type="email" className="login-input" id="email" value={state.email} onChange={handleChange} placeholder="EMAIL" />
            
            <input type="password" className="login-input" id="password" value={state.password} onChange={handleChange} placeholder="PASSWORD" />
            
            <div className="d-flex justify-content-end">
            
              <button className="btn login-btn" onClick={onLoginSubmit}>LOGIN<i className="material-icons login-icon">login</i></button>
            </div>
          </div>
        </Col>
      </Row>
      <p className="login-app-p"> TELAH APP 1.0 SECURED SPACE.</p>
    </div>
  )
}

// function Login(props) {
//   const [state , setState] = useState({
//       email : "",
//       password : "",
//       successMessage: null,
//       errors: {
//         email: "",
//         password: "",
//       },
//       loginState: ""
//   })

//   const handleChange = (event) => {
//       const {id , value} = event.target   
//       setState(prevState => ({
//           ...prevState,
//           [id] : value
//       }));
//       validationErrorMessage(event);
//   }

//   const validationErrorMessage = (event) => {
//     const { name, value } = event.target;
//     const errors = "";
//     const previousState = state;
//     switch (name) {
//       case 'email': 
//         errors = value.length < 1 ? 'Enter User Email' : '';
//         previousState.errors.email = errors;
//         setState(previousState);
//         break;
//       case 'password': 
//         errors = value.length < 1 ? 'Enter User Password' : '';
//         previousState.errors.password = errors;
//         setState(previousState);
//         break;
//       default:
//         break;
//     }  
//   }

//   const onLoginSubmit = (e) => {
//     console.log(state);
//     onEmailCheck();
//     if(state.errors.email.length > 0 || state.errors.password.length > 0) {
//       return;
//     } else {
//       props.history.push('/dashboard');
//     }
    
//   }

//   const onEmailCheck = () => {
//     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     const emailState = true;
//     const previousState = state;
//     if(!state.email || regex.test(state.email) === false) {
//       previousState.errors.email = "Email is not valid";
//     }
//   }

//   return(
//     <div className="login-container">
//       <Row className="login-row">
//         <Col lg="7" md="7" sm="12" className="login-img">
//           <div className="d-flex justify-content-center align-items-center offset-md-1 col-md-7 login-sub-img ">
//             <div className="flex-column">
//               <img className="login-chief" src={require("../images/chief.png")} />
//               <div className="login-text-title">Managing your Estate just got easier</div>
//               <div className="login-text-content">Record payments and expenses, track down debtors and download your financial report using TELAH</div>            
//             </div>
//           </div>
//         </Col>
//         <Col lg="5" md="5" sm="12" className="login-field d-flex align-items-center">
//           <div className="d-flex flex-column" >
//             <img
//               className="login-logo"
//               src={require("../images/logo2.png")}
//               alt="Shards Dashboard"
//             />
//             <p className="login-p">Join our community of facility managers as we help you manage your property units with ease</p>
//             <input type="email" className="login-input" id="email" value={state.email} onChange={handleChange} placeholder="EMAIL" />
//             { state.errors.email.length > 0 &&  <span className='error'>{state.errors.email}</span>}
//             <input type="password" className="login-input" id="password" value={state.password} onChange={handleChange} placeholder="PASSWORD" />
//             { state.errors.password.length > 0 &&  <span className='error'>{state.errors.password}</span>}
//             <div className="d-flex justify-content-end">
//               { state.loginState.length > 0 &&  <span className='error'>{state.loginState}</span>}
//               <button className="btn login-btn" onClick={onLoginSubmit}>LOGIN<i className="material-icons login-icon">login</i></button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//       <p className="login-app-p"> TELAH APP 1.0 SECURED SPACE.</p>
//     </div>
//   )
// }
export default Login;

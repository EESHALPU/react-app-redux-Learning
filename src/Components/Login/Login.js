import React,{useState} from "react";

export const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email : "mdeesha@gmail.com",
    password : "eesha123"
  })
  let handleSubmit = () =>{
    console.log(userLogin)
  }

  let handleChange = (event) =>{
    let data = {}
    data[event.target.name] = event.target.value;
    setUserLogin({...userLogin,...data})

  }
  return (
    <div className="d-flex justify-content-center" style={{backgroundColor:"#D3D3D3"}}>
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>    
            <div className="form-outline mb-2 mt-4">
              <input type="email" name="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" onChange={handleChange} />
              <label className="form-label" for="form3Example3">Email address</label>
            </div>

            <div className="form-outline mb-3">
              <input type="password" name="password" id="form3Example4" className="form-control form-control-lg" onChange={handleChange}
                placeholder="Enter password" />
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
          
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}
                style={{paddingLeft: "2.5rem" ,"paddingRight": "2.5rem"}}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                  className="link-danger">Register</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

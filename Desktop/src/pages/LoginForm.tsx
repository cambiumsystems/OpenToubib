import React, { useState } from 'react';
import { shell } from 'electron';
import icon from '../../assets/icon.png';

function LoginForm({ Loginn, error }) {
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    // get localstorage email
    if (details.email == '' && localStorage.getItem('email') != '') {
      details.email = localStorage.getItem('email');
    }
    // login function
    Loginn(details);
  };

  return (
    <section className="sign-in-page ">
      <div className="container sign-in-page-bg mt-5 p-0">
        <div className="row no-gutters  HEII col-sm-12">
          <div className="col-md-6 text-center">
            <div className="sign-in-detail text-white">
              <a className="sign-in-logo mb-5">
                <img className="img-fluid" alt="icon" src={icon} />
              </a>
              <div className="owl-carousel owl-loaded owl-drag txt_b">
                <b> Ne tardez plus tout vos avantages vous attendent </b>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => shell.openExternal('http://localhost:3000/')}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <div className="sign-in-from">
              <h1 className="mb-0">Sign in</h1>
              <p className="gris mt-4">
                Enter your email adress and password to access to your personal
                account
              </p>

              <form className="mt-4" onSubmit={submitHandler}>
                <div className="form-inner">
                  {error != '' ? <div className="error red">{error}</div> : ''}
                  <div className="from-group">
                    <label>Email:</label>
                    <input
                      className="form-control mb-0"
                      type="text"
                      name="email"
                      id="email"
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      placeholder={
                        localStorage.getItem('email') != null
                          ? localStorage.getItem('email')
                          : details.email
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control mb-0"
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>
                  <div className="d-inline-block w-100">
                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1"></div>
                  </div>
                  <input
                    className="btn btn-primary float-right"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;

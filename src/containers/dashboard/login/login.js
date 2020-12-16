import React, { Component } from 'react'
import Classes from "./login.module.css";
import cx from "classnames";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      emailValidity: false,
      passwordValidity: false,
      error: ""
    }

    this.emailTouched = false;
    this.passwordTouched = false;
  }

  async login(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/admin/", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 200) {
          // store the user in localStorage
          localStorage.setItem('user', {name:result.name});
          localStorage.setItem('token', "Bearer "+result.token);
         this.props.history.push("/dashboard/");
        }

        if (result.status === 400) {
          this.setState({ error: result.message });
        }
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(e) {
    if (e.target.name === "email") this.setState({ email: e.target.value });
    if (e.target.name === "password") this.setState({ password: e.target.value });
  }

  async validateEmail(e) {
    this.emailTouched = true;
    var re = /\S+@\S+\.\S+/;
    await this.setState({ emailValidity: re.test(e.target.value) });
    console.log(this.emailTouched, " ", this.state.emailValidity);
  }

  render() {
    return (
      <section className={cx("container", Classes.loginContainer)}>
        <div className={cx(Classes.formWrapper)}>
          <form id="form" className={Classes.form} name="emailform" onSubmit={this.login.bind(this)} >
            <h3 className={cx(Classes.formTitle)}>Login</h3>
            <div className={cx(Classes.formInputMax)}>
              <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                <input className={cx(Classes.formInput)} onBlur={this.validateEmail.bind(this)} id="email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
                {((!this.state.emailValidity) && this.emailTouched) ? <p className="text-danger position-absolute mb-0 ml-2">Unvalid Email</p> : null}
              </div>
            </div>
            <div className={cx(Classes.formInputMax)}>
              <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                <input className={cx(Classes.formInput)} id="password" name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange.bind(this)} aria-label="" required />
              </div>
            </div>
            <div className={cx(Classes.formInputMax, Classes.flexboxLeft)}>
              <div className={cx(Classes.buttonWrapper)}>
                <button id="form-button" type="submit" className={cx(Classes.button, Classes.btnPrimary)}>
                  Login
                        <div className={cx(Classes.btnSecondary)}></div>
                </button>
              </div>
            </div>
            {(this.state.error !== "") ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : null}
          </form>
        </div>
      </section>
    )
  }
}

export default withRouter(Login)

import { RadioTwoTone } from '@material-ui/icons';
import Axios from 'axios';
import React, { Component } from 'react'
export default class Add extends Component {
    constructor(props){
        super(props);
        
        this.state={
            batteryCapacity:0,
            modelName:"",
            price:0,
            releasedDate:"",
            OS:"",
            brand:"",
            brandId:"5fb684f96c02b306cec79e02",
            rearCameraRes:"",
            frontCameraRes:"",
            sim:"",
            cpu:"",
            memory:"",
            screenSize:"",
            ram:"",
            file:""
        }
    }
  
    render() {
        const redirectToLogin=()=>{
            localStorage.clear();
            return this.props.history.push("/dashboard/login");
        }
         
        const add = async (e)=>{
            e.preventDefault();
            console.log(this.state);



    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token",localStorage.getItem("token"));
    var raw = JSON.stringify({
        ...this.state
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/admin/model", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 200) {
          // store the user in localStorage
          localStorage.setItem('user', {name:result.name});
          localStorage.setItem('token', "Bearer "+result.token);
         this.props.history.push("/dashboard/");
        }

        if (result.status === 400 || result.status === 401) {
          this.setState({ error: result.message });
        }
        console.log(result);
      })
      .catch(error => console.log('error', error));
              
            /* 
                let config = {
                    headers: {
                      token: localStorage.getItem("token")
                    },
                    body:JSON.stringify(this.state)
                  }

                const formData = new FormData();
                 for(var key in this.state){
                    formData.append(key,this.state[key])
                    console.log(key,":",this.state[key])
                }

                  Axios.post("http://localhost:8000/admin/model/",formData,config)
                 .then(response => response.json())
                    .then(result => {
                        if (result.status === 200) {
                            alert("Item added Sucessfuly");
                        }
                        if (result.status === 401 || result.status === 400) {
                            redirectToLogin();
                        }
                        if (result.status === 500) {
                            console.log("Error");
                        }
                    })
                    .catch(error => {console.log('error', error)}); */
            }
        return (
            <div className="container">
                <h1>Add a new phone</h1>
                <form onSubmit={add.bind(this)}>
                    <div className="">
                        <h5>Model Name:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({modelName:e.target.value}); console.log(this.state.modelName) }} value={this.state.modelName} />
                    </div>
                    <div className="">
                        <h5>Price:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({price:e.target.value}); console.log(this.state.price) }} value={this.state.price}  />
                    </div>
                    <div className="">
                        <h5>Screen Size:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({screenSize:e.target.value}); console.log(this.state.screenSize) }} value={this.state.screenSize}  />
                    </div>
                    <div className="">
                        <h5>OS:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({OS:e.target.value}); console.log(this.state.OS) }} value={this.state.OS}  />
                    </div>
                    <div className="">
                        <h5>Brand:</h5>
                        <select onChange={async(e)=>{await this.setState({brand:e.target.value}); (e.target.value ==="Samsung"?this.setState({brandId:"5fb3dad6133c9681449ca893"}):(e.target.value ==="Oppo"?this.setState({brandId:"5fb684f96c02b306cec79e02"}):this.setState({brandId:"5fb3daa9133c9681449ca891"})))  }} value={this.state.brand} >
                            <option value="Samsung">Samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="Oppo">Oppo</option>
                        </select>
                    </div>
                    <div className="">
                        <h5>Rear Camera Resolution:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({rearCameraRes:e.target.value}); console.log(this.state.rearCameraRes) }} value={this.state.rearCameraRes}  />
                    </div>
                    <div className="">
                        <h5>Front Camera Resolution:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({frontCameraRes:e.target.value}); console.log(this.state.frontCameraRes) }} value={this.state.frontCameraRes}  />
                    </div>
                    <div className="">
                        <h5>Released Date:</h5>
                        <input type="date" onChange={async(e)=>{await this.setState({releasedDate:e.target.value}); console.log(this.state.releasedDate) }} value={this.state.releasedDate}  />
                    </div>
                    <div className="">
                        <h5>Memory:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({memory:e.target.value}); console.log(this.state.memory) }} value={this.state.memory}  />
                    </div>
                    <div className="">
                        <h5>Ram:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({ram:e.target.value}); console.log(this.state.ram) }} value={this.state.ram}  />
                    </div>
                    <div className="">
                        <h5>Sim:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({sim:e.target.value}); console.log(this.state.sim) }} value={this.state.sim}  />
                    </div>
                    <div className="">
                        <h5>Cpu:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({cpu:e.target.value}); console.log(this.state.modelName) }} value={this.state.cpu} />
                    </div>
                    <div className="">
                        <h5>Battery Capacity:</h5>
                        <input type="text" onChange={async(e)=>{await this.setState({batteryCapacity:e.target.value}); console.log(this.state.batteryCapacity) }} value={this.state.batteryCapacity}  />
                    </div>
                    <div className="">
                        <h5>Image:</h5>
                        <input type="file"  onChange={async(e)=>{await this.setState({file:e.target.files[0]});}}  />
                    </div>
                    <input type="submit"  value="save"/>
                </form>
            </div>
        )
    }
}

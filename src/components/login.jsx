
import React from 'react';
import '../assetss/css/login.css'
import logo from '../assetss/img/log.png';
import { Apiurl } from '../services/apirest'
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }



    state = {
        form: {
            "email": "",
            "contrasenia": ""
        },
        error: false,
        errorMsg: ""
    }

    manejadorSubmit = e => {
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        })
        console.log(this.state.form);
    }


    manejadorBoton = () => {
        let url = Apiurl + "usuario"
        axios.post(url, this.state.form).then(response => {
            console.log(response)
            if (response.data.status === "OK") {
                this.props.history.push("/dashboard")

            }else{
            this.setState({
            error: false })
            this.props.history.push("/Nuevo")

            }


        })
    }

    render() {

        return (

            <React.Fragment>

                <div className="wrapper fadeInDown">
                    <br />
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={logo} width="180px" alt="User Icon" />
                        </div>
                        <br />
                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text" className="fadeIn second" name="email" placeholder="E-mail" onChange={this.manejadorChange} />
                            <input type="password" className="fadeIn third" name="contrasenia" placeholder="Contraseña" onChange={this.manejadorChange} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
                        </form>
                        {this.state.error === true &&
                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMsg}

                            </div>

                        }


                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Login
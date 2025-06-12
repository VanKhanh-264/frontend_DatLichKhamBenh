import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLoginApi} from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }   

    handleOnchangeUsername = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    
    handleLogin = async () => {
        console.log('username: ' + this.state.username);
        console.log('password: ' + this.state.password);
        console.log('all state: ', this.state);

        try {
            await handleLoginApi(this.state.username, this.state.password)
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div className='login-backround'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group'>
                            <label className='lb-login'>Username:</label>
                            <input type='text' className='form-control login-input' placeholder='Enter your username' 
                                    value={this.state.username} onChange={(event) => {this.handleOnchangeUsername(event)}}/>
                        </div>
                        <div className='col-12 form-group'>
                            <label className='lb-login'>Password:</label>
                            <input type='password' className='form-control login-input' placeholder='Enter your password' 
                                    value={this.state.password} onChange={(event) => {this.handleOnchangePassword(event)}}/>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-orther-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook" ></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

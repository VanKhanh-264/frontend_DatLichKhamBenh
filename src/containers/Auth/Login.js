import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {handleLoginApi} from '../../services/userService';
import * as actions from '../../store/actions';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',  
            errMessage: ''
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
//      clear mã lỗi trước khi login
        this.setState({          //|
            errMessage:''        //|   36'33
        })                       //|    
//-------------------------------//|

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            
            if(data && data.errCode !== 0){
                this.setState({          
                    errMessage:data.message        
                })
            }else if(data && data.errCode === 0){
                this.props.userLoginSuccess(data.user)
                console.log('Login success.')
            }
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage : error.response.data.message
                    })
                }
            }
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
                        <div className='col-12 lb-error' style={{color : 'red' }}>
                            {this.state.errMessage}
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

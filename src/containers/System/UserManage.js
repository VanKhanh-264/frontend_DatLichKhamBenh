import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import {getAllUsers, createNewUserService, deleteUserService} from '../../services/userService'
import ModalUser from './ModalUser';
import {emitter} from '../../utils/emitter'

class UserManage extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            arrUsers: [],
            isOpenModalUser : false,
            
        }
    }
    async componentDidMount() {
        await this.getAllUserFromReact();
    }
    
    getAllUserFromReact =async () => {
        let response = await getAllUsers('ALL');

        if(response && response.errCode === 0 ){
            this.setState({
                arrUsers: response.users
            })          
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if(response && response.errCode !== 0){
                alert(response.errMessage)
            } else{
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser : false,
                })
                emitter.emit("EVENT_CLEAR_MODAL_DATA")
            }
        } catch (e) {
            console.log(e)
        }
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if(res && res.errCode === 0){
                await this.getAllUserFromReact();
            }else{
                alert(errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    /**life circle:
     * run component
     * 1.run constructure -> init state
     * 2. Did mount (set state)
     * 3. render
     */

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div  className='users-container'>
                <ModalUser
                    isOpen = {this.state.isOpenModalUser}
                    toggleFromParent = {this.toggleUserModal}
                    test = {"abc"}
                    createNewUser = {this.createNewUser}
                />
                <div className=" title text-center">Manage users by VanKhanh</div>
                <div className="mx-1 ">
                    <button type="button " className="btn btn-primary px-3"
                            onClick={() => this.handleAddNewUser()}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                         Add new user 
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>   
                            {arrUsers && arrUsers.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'>
                                                <i className="fas fa-pencil-alt"></i> 
                                            </button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}>
                                                <i className="fas fa-trash"></i> 
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }                  
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

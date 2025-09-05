import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss';
import Slider from "react-slick";

import SpecialtyImg from '../../../assets/specialty/co-xuong-khop.jpeg' 
class Specialty extends Component {

    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <div className='title-section'>Chuyên khoa phổ biến</div>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 1 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 1  </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 3 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 4 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 5 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 6 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div >Cơ xương khớp 7 </div>
                            </div>
                        </Slider> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

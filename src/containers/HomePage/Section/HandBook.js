import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class HandBook extends Component {

    render() {
        
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <div className='title-section'>Cẩm nang</div>
                        <button className='btn-section btn-handbook'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div className='section-description handbook-description'>Mổ cận silk là gì? Review mổ cận silk ở đâu Hà Nội?</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);

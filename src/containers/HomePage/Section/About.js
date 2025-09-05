import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>Truyền thông nói gì về BookingCare</div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="492" 
                            src="https://www.youtube.com/embed/OASGscJQXp0" 
                            title="BookingCare: Hệ thống đặt khám trực tuyến"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Công ty Cổ phần Công nghệ BookingCare
                            Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                            ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                            024-7301-2468 (7h - 18h)
                            support@bookingcare.vn (7h - 18h)
                            Văn phòng tại TP Hồ Chí Minh
                            Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

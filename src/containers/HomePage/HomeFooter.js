import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {
        
        return (
            <div className='home-footer'>
                <p>
                    &copy; 2025 BookingCare by VanKhanh. To contact to me, please <a target='_blank' href='https://www.facebook.com/VanKhanh2643'>&#171;click here&#187;</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

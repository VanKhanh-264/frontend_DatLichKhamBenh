import { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class OutstandingDoctor extends Component{
    render() {
        
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <div className='title-section'>Bác sĩ nổi bật</div>
                        <button className='btn-section btn-outstanding-doctor'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 1</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 2</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 3</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 4</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 5</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className="outer-bg">
                                        <div className='bg-image section-outstanding-doctor'/>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ 6</div>
                                        <div>cơ xương khớp</div>
                                    </div>
                                </div>
                            
                            </div>
                        </Slider> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)


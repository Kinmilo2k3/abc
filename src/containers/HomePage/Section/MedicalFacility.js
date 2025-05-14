import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {
      render() {
            // let settings = {
            //       dots: false,
            //       infinite: true,
            //       speed: 500,
            //       slidesToShow: 4,
            //       slidesToScroll: 2
            // };

            return (
                  <div className='section-share section-medical-facility'>
                        <div className='section-container'>
                              <div className='section-header'>
                                    <span className='title-section'>Cơ Sở Y Tế Nổi Bật</span>
                                    <button className='btn-section'>Xem Thêm </button>
                              </div>
                              <div className='section-body'>
                                    <Slider {...this.props.settings}>
                                          <div className="section-customize">
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  1</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  2</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  3</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  4</div>
                                          </div>
                                          <div className='section-customize'>
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  5</div>
                                          </div>
                                          <div className='section-customize'>
                                                <div className="bg-image section-medical-facility" />
                                                <div>Hệ Thống Y Tế Thu Cúc  6</div>
                                          </div>
                                    </Slider>
                              </div>
                        </div>
                  </div>
            );
      }

}

const mapstateToProps = state => {
      return {
            isLoggedIn: state.user.isLoggedIn,
            language: state.app.language,
      };
};
const mapDispatchToProps = dispatch => {
      return {
      };
};
export default connect(mapstateToProps, mapDispatchToProps)(MedicalFacility);
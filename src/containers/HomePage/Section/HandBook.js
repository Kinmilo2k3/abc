import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class HandBook extends Component {
      render() {
            // let settings = {
            //       dots: false,
            //       infinite: true,
            //       speed: 500,
            //       slidesToShow: 4,
            //       slidesToScroll: 2
            // };

            return (
                  <div className='section-share section-handbook'>
                        <div className='section-container'>
                              <div className='section-header'>
                                    <span className='title-section'>Cẩm Nang </span>
                                    <button className='btn-section'>Xem Thêm </button>
                              </div>
                              <div className='section-body'>
                                    <Slider {...this.props.settings}>
                                          <div className="section-customize">
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 1</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 2</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 3</div>
                                          </div>
                                          <div className="section-customize">
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 4</div>
                                          </div>
                                          <div className='section-customize'>
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 5</div>
                                          </div>
                                          <div className='section-customize'>
                                                <div className="bg-image section-handbook" />
                                                <div>Cơ xương khớp 6</div>
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
export default connect(mapstateToProps, mapDispatchToProps)(HandBook);
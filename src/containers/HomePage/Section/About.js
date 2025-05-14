import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

class About extends Component {
      render() {
            return (
                  <div className='section-share section-about'>
                        <div className='section-about-header'>
                              Truyền thông về Website
                        </div>
                        <div className='section-about-content'>
                              <div className='content-left'>
                                    <iframe width="100%" height="400px"
                                          src="https://www.youtube.com/embed/prVeCsG0pSQ"
                                          title="Giới Thiệu Phòng Khám Nha Khoa Đại Nam"
                                          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                              </div>
                              <div className='content-right'>
                                    <p>Phòng khám nha khoa Đại Nam tự hào là địa chỉ đáng tin cậy dành cho mọi nhu cầu chăm sóc răng miệng của bạn.
                                          Với đội ngũ bác sĩ nha khoa giàu kinh nghiệm, hệ thống trang thiết bị hiện đại và dịch vụ tận tâm,
                                          chúng tôi cam kết mang đến cho khách hàng nụ cười khỏe mạnh và tự tin. Tại Đại Nam, chúng tôi cung cấp đa dạng
                                          các dịch vụ như khám và tư vấn răng miệng, điều trị sâu răng, niềng răng, trồng răng implant, và tẩy trắng răng,
                                          đáp ứng mọi nhu cầu từ cơ bản đến chuyên sâu. Hãy để Đại Nam đồng hành cùng bạn trên hành trình bảo vệ sức khỏe răng miệng!
                                    </p>
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
export default connect(mapstateToProps, mapDispatchToProps)(About);
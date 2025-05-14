import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

class HomeFooter extends Component {
      render() {
            return (
                  <div className='home-footer'>

                        <p>&copy; By Hoang Si Vuong <a target='_blank' href='https://www.facebook.com/vuong.hoang.848328'>More Info</a></p>
                        <p>2025 BookingCare.com</p>
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
export default connect(mapstateToProps, mapDispatchToProps)(HomeFooter);
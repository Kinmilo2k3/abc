import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import * as actions from "../../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { values } from 'lodash';
import Select from 'react-select';
import { fetchAllDoctors } from '../../../store/actions';

// const options = [
//       { value: 'vuong', label: 'Hoang Si Vuong' },
//       { value: 'duc', label: 'Phan Van Duc' },
//       { value: 'thi', label: 'Hoang Van Thi' },
// ];
const mdParser = new MarkdownIt(/* Markdown-it options */);

// function handleEditorChange({ html, text }) {
//       console.log('handleEditorChange', html, text);
// }


class ManageDoctor extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  contentMarkdown: '',
                  contentHTML: '',
                  selectedOption: '',
                  description: '',
                  listDoctors: []
            }
      }

      componentDidMount() {
            this.props.fetchAllDoctors()
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.allDoctors !== this.props.allDoctors) {
                  let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
                  this.setState({
                        listDoctors: dataSelect,

                  })
            }
            if (prevProps.language !== this.props.language) {
                  let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
                  this.setState({
                        listDoctors: dataSelect,
                  })

            }
      }

      handleEditorChange = ({ html, text }) => {
            this.setState({
                  contentMarkdown: text,
                  contentHTML: html,
            })
      }
      buildDataInputSelect = (inputData) => {
            let result = [];
            let { language } = this.props;
            // let { listDoctors } = this.state;
            if (inputData && inputData.length > 0) {
                  inputData.map((item, index) => {
                        let object = {};
                        let labelVi = `${item.lastName} ${item.firstName}`;
                        let labelEn = `${item.firstName} ${item.lastName}`;
                        object.label = language === language.VI ? labelVi : labelEn;
                        object.value = item.id;
                        result.push(object);
                  })
            }
            return result;
      }

      handleSaveContentMarkdown = () => {
            // console.log('vuong check state', this.state)
            this.props.saveDetailDoctor({
                  contentHTML: this.state.contentHTML,
                  contentMarkdown: this.state.contentMarkdown,
                  description: this.state.description,
                  doctorId: this.state.selectedOption.value
            })
      }

      handleChange = selectedOption => {
            this.setState({ selectedOption });
      };

      handleOnChangeDesc = (event) => {
            this.setState({
                  description: event.target.value
            })
      }

      render() {
            // console.log('testthisstate', this.state)
            return (
                  <div className='manage-doctor-container'>
                        <div className="manage-doctor-title">
                              Tạo thêm thông tin doctors
                        </div>
                        <div className="more-infor">
                              <div className="content-left form-group">
                                    <label>chọn bác sĩ</label >
                                    <Select
                                          value={this.state.selectedOption}
                                          onChange={this.handleChange}
                                          options={this.state.listDoctors}
                                    />
                              </div>
                              <div className="content-right">
                                    <label>Thông tin giới thiệu: </label>
                                    <textarea className="form-control" rows="4"
                                          onChange={(event) => this.handleOnChangeDesc(event)}
                                          value={this.state.description}
                                    >
                                          asdfasfdasfdasfasasfd

                                    </textarea>
                              </div>
                        </div>
                        <div className='manage-doctor-editor'>
                              <MdEditor
                                    style={{ height: '500px' }}
                                    renderHTML={text => mdParser.render(text)}
                                    onChange={this.handleEditorChange} />
                        </div>
                        <button onClick={() => this.handleSaveContentMarkdown()}
                              className="save-content-doctor">
                              Luu Thong Tin
                        </button>
                  </div>

            );
      }

}

const mapStateToProps = state => {
      return {
            language: state.app.language,
            allDoctors: state.admin.allDoctors
      };
};

const mapDispatchToProps = dispatch => {
      return {
            fetchAllDoctors: (id) => dispatch(actions.fetchAllDoctors()),
            saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);








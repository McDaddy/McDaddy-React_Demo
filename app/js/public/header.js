import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from '../../css/header';

class Header extends React.Component {
  constructor(){
    super();
  }

  download = () => {
    fetch('http://localhost:3000', {
      method: 'GET',
      mode: 'cors',
      headers: {

      }
    }).then(response => {
      // console.log(response.blob());
      return response.blob();
    }).then(data => {
      console.log(data);
      let a = document.createElement('a');
      let url = window.URL.createObjectURL(data);
      let filename = 'my-excel.xlsx';
      a.href = url;
      a.download = filename;
      a.click();
    })
  }

  render () {
    return (
      <div styleName='header'>
        <span styleName='left'>
          <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
        <button styleName='btnDownload' onClick={this.download}>APP下载</button>
      </div>
    );
  }
}

export default CSSModules(Header,style);

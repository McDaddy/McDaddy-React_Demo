import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper';
import style from '../../css/slider';
import CSSModules from 'react-css-modules';
import styles from "react-id-swiper/src/styles/css/swiper.css";

class Slider extends React.Component {
  render () {
    const params = {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    return (
      <section styleName="my-slider">
        <Swiper {...params}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
      </section>
    )
  }
}

export default CSSModules(Slider,style);

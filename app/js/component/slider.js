import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper';
import style from '../../css/slider';
import CSSModules from 'react-css-modules';
import styles from "react-id-swiper/src/styles/css/swiper.css";

class Slider extends React.Component {
  render () {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
    return (
      <section styleName="my-slider">
        <Swiper {...params}>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t20497/170/1031369744/54788/47f6d23f/5b1e655eNdf0df374.jpg?width=750&amp;height=320" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t21643/321/1048216140/40302/8837f483/5b1e657eNb52e59ed.jpg?width=750&height=320" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t21643/127/993222358/50385/d1e4cf11/5b1e65dfNeec85276.jpg?width=750&height=320" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t20590/76/1070891676/37916/c0a24502/5b1fbec9N20462e5f.jpg?width=750&height=320" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t22174/173/862797748/49580/b3df2bdb/5b193063N9afa3837.jpg?width=750&height=320" alt=""/></div>
        </Swiper>
      </section>
    )
  }
}

export default CSSModules(Slider,style);

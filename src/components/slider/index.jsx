/*eslint-disable */
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import numeral from 'numeral';
import styles from './style.scss';

class CreditSimulator extends Component {
  state = { amount: 0, textValue: this.props.min || '0' };

  handleChange = value => {
    const { onChange = () => {} } = this.props;
    onChange(value);
    this.setState({ amount: value, textValue: value });
  };

  onChangeText = e => {
    const {
      target: { value },
    } = e;
    if (e.key === 'Enter') {
      this.onBlurText(e);
    } else {
      let textValue = '';
      if (value) textValue = value;
      this.setState({ textValue });
    }
  };

  onBlurText = ({ target: { value } }) => {
    const { min = 0, max = 100, onChange = () => {} } = this.props;
    let textValue = min;
    if (value) textValue = parseInt(value);
    if (textValue < min) textValue = min;
    if (textValue > max) textValue = max;
    onChange(textValue);
    this.setState({ amount: textValue, textValue });
  };

  render() {
    const { onChangeText, props } = this;
    const { prefix = '', title, min = 0, max = 100 } = props;
    return (
      <>
        <div className={styles.slider}>
          <div className={styles.sliderHeader}>
            <div className={styles.sliderText}>
              <span>{title}</span>
            </div>
            <div className={styles.sliderValue}>
              <span>{prefix}</span>
              <input
                className={styles.sliderValue}
                type="text"
                value={this.state.textValue}
                onKeyDown={onChangeText}
                onChange={onChangeText}
                onBlur={this.onBlurText}
              />
            </div>
          </div>
        </div>
        <Slider
          style={{ width: '95%', margin: 'auto', marginTop: '6rem', hight: 10 }}
          min={min}
          max={max}
          onChange={this.handleChange}
          value={this.state.amount}
        />
        <div className={styles.sliderFooter}>
          <span className={styles.sliderFooterMin}>
            {numeral(min).format(prefix + ' n,nnn')}
          </span>
          <span className={styles.sliderFooterMax} style={{ float: 'right' }}>
            {numeral(max).format(prefix + ' n,nnn')}
          </span>
        </div>
        <br />
        <br />
      </>
    );
  }
}

CreditSimulator.propTypes = {
  title: PropTypes.string,
  prefix: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.function,
};

export default CreditSimulator;

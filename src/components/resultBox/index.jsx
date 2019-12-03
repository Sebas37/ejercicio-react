import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import styles from './style.scss';

class ResultBox extends Component {
  render() {
    const { value } = this.props;
    return (
      <>
        <div className={styles.resultContainer}>
          <span className={styles.text}>CUOTA FIJA POR MES</span>
          <span className={styles.value}>
            {numeral(value).format('$ n,nnn.nn')}
          </span>
        </div>
        <div className={styles.resultContainer}>
          <button type="button" className={styles.primaryButton}>
            OBTENÉ CREDITO
          </button>
          <button type="button" className={styles.secondaryButton}>
            VER DETALLE DE CUOTAS
          </button>
        </div>
      </>
    );
  }
}

ResultBox.propTypes = {
  value: PropTypes.string,
};

export default ResultBox;

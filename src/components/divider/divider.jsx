import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from 'divider.scss';

const Divider = ({className}) => (
    <div className={classNames(styles.divider, className)} />
);

Divider.propTypes = {
    className: PropTypes.string
};

export default Divider;

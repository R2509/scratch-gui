import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from 'user-avatar.scss';

const UserAvatar = ({
    className,
    imageUrl
}) => (
    <img
        className={classNames(
            className,
            styles.userThumbnail
        )}
        src={imageUrl}
    />
);

UserAvatar.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string
};

export default UserAvatar;

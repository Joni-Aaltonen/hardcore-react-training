/**
 * Created by joni on 30/11/16.
 */
import React from 'react';
import styles from './Button.pcss';
import cx from 'classnames';
import {pure} from 'recompose';

const Button = props => {
  const {block, children, className, ...rest} = props;

  const classes = cx(
    className,
    styles.btn,
    {
      [styles.block]: block,
    }
  );

  return (
    <button {...rest} className={classes} >{children}</button>
  );

}

Button.defaultProps = {
  block: false,
};

Button.propTypes = {
  block: React.PropTypes.bool.isRequired,
}

export default pure(Button);

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'tigerspack';

const ButtonComponent = ({ children, ...props }) => (
    <Grid padding={5}>
      <Button {...props}>{children}</Button>
    </Grid>
);

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  scales: PropTypes.oneOf(['small', 'normal', 'big']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'dark', 'gray']),
  outline: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  scales: 'normal',
  theme: 'primary',
  outline: false,
};

export default ButtonComponent;

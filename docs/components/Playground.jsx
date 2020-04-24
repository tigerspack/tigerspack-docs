import React from 'react';
import { Blank, Grid } from 'tigerspack';
const Playground = ({children}) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Blank>
      <Grid flow={'column'} stretch={'width'}>
        {children}
      </Grid>
    </Blank>
  );
};

export default Playground;

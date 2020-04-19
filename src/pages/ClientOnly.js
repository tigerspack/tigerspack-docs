import React from 'react';

const ClientOnly = ({children}) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return children;
};

export default ClientOnly;

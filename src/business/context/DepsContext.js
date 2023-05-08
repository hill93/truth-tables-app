import {createContext, useContext, useState} from 'react';

const DepsContext = createContext({});

export function useDeps() {
  return useContext(DepsContext);
}

export function DepsProvider({children, ...services}) {

  return (
    <DepsContext.Provider value={services}>
      {children}
    </DepsContext.Provider>
  )
}
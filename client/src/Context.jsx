import React, { createContext, useContext, useState} from 'react';

const NoteContext = createContext()

const Context = ({ children}) => {
  return ( 
    <NoteContext.Provider value={{}}>
        {children}
    </NoteContext.Provider>
  )
};

export const NoteState = () => {
    return useContext(NoteContext);
}

export default Context;

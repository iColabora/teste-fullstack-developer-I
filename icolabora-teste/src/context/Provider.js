import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/api';
import Context from './Context';

function Provider({ children })  {
  const [data, setData] = useState([]);
  const [regua, setRegua] = useState();
  const [status, setStatus] = useState();

  async function setResponse() {
    try {
      const response = await fetchApi();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    setResponse();
  }, []);


  return(
    <Context.Provider
      value={ 
        {
          data,
          regua,
          setRegua,
          status,
          setStatus,
        }
       }
    >
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;

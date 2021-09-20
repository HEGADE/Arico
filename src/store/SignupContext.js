import React, { createContext, useState, useEffect } from 'react';
import { config } from '../config';
import axios from 'axios';
import { LocalStorage } from '../helper/localStorage';
import { validator } from '../helper/validator';

export const authC = createContext();
export const SignupContext = ({ children }) => {
   const [isLog, setIsLogg] = useState(false);
   const [loading, setLoading] = useState(false);
   const [token, setToken] = useState('');

   useEffect(() => {
      isAuthenticated();
   }, []);

   const signup = async (username, name, email, password, cPassword) => {
      if (password !== cPassword)
         return { msg: 'passwords are not matching', token };

      if (validator(username, name, email, password, cPassword))
         return { msg: 'Details must be 4 character  long', token };

      const body = {
         username,
         name,
         email,
         password,
      };

      let data = await axios.post(
         'http://localhost:8000/api/signup/',
         JSON.stringify(body),
         config
      );

      return { msg: data.data.msg, token: data.data.token };
   };
   const login = async (username, password) => {
      const body = {
         username,
         password,
      };
      let data = await axios.post(
         'http://localhost:8000/api/login/',
         JSON.stringify(body),
         config
      );
      return data;
   };
   const loadingHandler = (e, bgColor, boolean) => {
      e.target.style.background = bgColor;
      setLoading(boolean);
   };

   const isAuthenticated = async () => {
      let _token = LocalStorage.getItem();
      config.headers['auth'] = _token;
      setLoading(true);
      try {
         let data = await axios.get(
            'http://localhost:8000/api/isauthenticated/',
            config
         );
         if (data.data?.code === -1) setIsLogg(false);
         else setIsLogg(true);
      } catch (e) {
         setIsLogg(false);// no need but still used 
      } finally {
         setLoading(false);
      }
   };
   const setAuth = (data) => {
      if (data.data?.code === -1) {
         setIsLogg(false);
      }
      if (data.data.article) {
         setLoading(false);
         setIsLogg(true);
      }
   };

   return (
      <authC.Provider
         value={{
            signup,
            isLog,
            setIsLogg,
            login,
            loadingHandler,
            loading,
            isAuthenticated,
            setLoading,
            setAuth,
         }}
      >
         {children}
      </authC.Provider>
   );
};

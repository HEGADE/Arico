import React, { useContext } from 'react';
import { authC } from '../store/SignupContext';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LocalStorage } from '../helper/localStorage';

const Heading = ({ title = 'Arico,place where you publish your articles' }) => {
   const { isLog, setIsLogg } = useContext(authC);
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
         </Helmet>
         <div className="heading_arico">
            <h2>Arico</h2>
            <div className="menu">
               <div>
                  <Link to="/">Home</Link>

                  {isLog ? (
                     <Link
                        to="/auth"
                        onClick={() => {
                           LocalStorage.remove('auth-token');
                           setIsLogg(false);
                        }}
                     >
                        Logout
                     </Link>
                  ) : null}

                  {isLog ? <Link to="/profile">Profile</Link> : null}
               </div>
            </div>
         </div>
      </>
   );
};

export default Heading;

import React from 'react';
import Data from '../customHooks/ProfileData';

const ProfileBody = () => {
   const [data] = Data();
   return (
      <>
         <div className="profile_body">
            <div className="profile_image">
               <img
                  src={`http://localhost:8000/${data.pic}`}
                  alt="userImage"
                  width="100"
                  height="100"
               />
            </div>
            <div className="user_name">
               <h2>User: {data.userName}</h2>
            </div>
            <div className="total_article user_name">
               <h2>Article posted: {data.articleCount}</h2>
            </div>
            <div className="name user_name">
               <h2>Name: {data.name}</h2>
            </div>
         </div>
      </>
   );
};

export default ProfileBody;

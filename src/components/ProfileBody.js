import React, { useContext } from "react";


const ProfileBody = () => {
  
  return (
    <>
      <div className="profile_body">
        <div className="profile_image">
          <img
            src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            alt="userImage"
            width="100"
            height="100"
          />
        </div>
        <div className="user_name">
          <h2>User: Ninja</h2>
        </div>
        <div className="total_article user_name">
          <h2>Article posted: 20</h2>
        </div>
        <div className="name user_name">
          <h2>Name: Something</h2>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;

import React, { useContext } from "react";
import Heading from "../commomComponets/Heading";
import "../assets/css/profile.scss";
import { Redirect } from "react-router";
import { authC } from "../store/SignupContext";
import CircularIndeterminate from "../commomComponets/Loader";
import { lazy, Suspense } from "react";

const ProfileBody = lazy(() => import("../components/ProfileBody"));

const Profile = () => {
  const { isLog, loading } = useContext(authC);
  if (loading) return <CircularIndeterminate />;
  if (!isLog) return <Redirect to="/" />;
  return (
    <>
      <Heading title="Profile" />
      <Suspense fallback={<CircularIndeterminate />}>
        <ProfileBody />
      </Suspense>
    </>
  );

};

export default Profile;

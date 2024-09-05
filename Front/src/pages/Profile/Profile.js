import React from 'react';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import ProfileImage from './components/ProfileImage';
import ProfileInfo from './components/ProfileInfo';
import Profiles from './components/Profiles';
import '../Profile/components/Profile.css';

const Profile = () => {

  return (
    <DisplaySetting>
    <Header />
      <div className="container">
        <Profiles/>
        <ProfileImage/>
        <ProfileInfo/>

        </div>
    </DisplaySetting>
  );
};

export default Profile;
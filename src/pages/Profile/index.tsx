import React, { useEffect, useState } from 'react';

import { TiLocationArrow } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

import { ProfileProps } from './types';

import api from '../../services/api';

import SocialMedia from '../../components/SocialMedia';

import './styles.css';

function Profile() {
  const [user, setUser] = useState<ProfileProps | null>(null);

  useEffect(() => {
    async function fetchProfileData(): Promise<void> {
      const { data } = await api.get<ProfileProps>('/users/fariasmateuss');

      setUser(data);
    }

    fetchProfileData();
  }, []);

  return (
    <main>
      {user && (
        <div className="container">
          <div className="card">
            <div className="header">
              <div className="hamburger-menu">
                <div className="center" />
              </div>
              <a href="mailto:mateus_vinicius15@outlook.com" className="mail">
                <HiOutlineMail size={30} />
              </a>
              <div className="main">
                <div className="image">
                  <img
                    className="avatar"
                    src={user.avatar_url}
                    alt={user.name}
                  />
                </div>
                <h3 className="name">{user.name}</h3>
                <h3 className="sub-location">
                  <span className="icon-location">
                    <TiLocationArrow />
                  </span>
                  {user.location}
                </h3>
              </div>
            </div>

            <div className="content">
              <div className="left">
                <div className="about-container">
                  <h3 className="title">About</h3>
                  <p className="text">{user.bio}</p>
                </div>

                <SocialMedia />

                <div className="buttons-wrap">
                  <div className="first-wrap">
                    <a
                      href="mailto:mateus_vinicius15@outlook.com"
                      target="blank"
                      className="first"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="second-wrap">
                    <a
                      href="https://github.com/fariasmateuss?tab=repositories"
                      target="blank"
                      className="second"
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>

              <div className="right">
                <div>
                  <h3 className="number">{user.public_repos}</h3>
                  <h3 className="number-title">Repositories</h3>
                </div>
                <div>
                  <h3 className="number">{user.following}</h3>
                  <h3 className="number-title">Following</h3>
                </div>
                <div>
                  <h3 className="number">{user.followers}</h3>
                  <h3 className="number-title">Followers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Profile;

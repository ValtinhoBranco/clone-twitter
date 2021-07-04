import React from 'react';



import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage} from './styles';

import Feed from '../Feed';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>


      </Banner>

      <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>

          <h1>Valter Branco Filho</h1>
          <h2>@valtinhobranco</h2>

          <p>
            Developer at <a href="/#">@Rocketseat</a>
          </p>

          <ul>
            <li>
              <LocationIcon/>
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon/>
             Nascido(a) em 22 de janeiro de 1989
            </li>
          </ul>

          <Followage>
          <span>
                seguindo <strong>200</strong> 
            </span>

            <span>
                <strong>120 </strong>  seguidores
            </span>
          </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage;
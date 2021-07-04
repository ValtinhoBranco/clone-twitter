import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';



import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>
    
    <StickyBox>
    <Body>
          <List 
            title="Talvez você Curta"
            elements={[
               <FollowSuggestion
                  name="Valter Branco"
                  nickname="@valtinhobranco"
               />,
               <FollowSuggestion
                  name="Carol Branco"
                  nickname="@carolbranco"
               />,
               <FollowSuggestion
                  name="Erica Branco"
                  nickname="@ericabranco"
               />,

            ]}
          />

           <List 
            title="Talvez você Curta"
            elements={[
                <News/>,
                <News/>,
                <News/>,
                <News/>,
                <News/>,

            ]}
          />

           <List 
            title="Talvez você Curta"
            elements={[
                <News/>,
                <News/>,
                <News/>,
                <News/>,
                <News/>,

            ]}
          />
           <List 
            title="Talvez você Curta"
            elements={[
                <News/>,
                <News/>,
                <News/>,
                <News/>,
                <News/>,

            ]}
          />
           <List 
            title="Talvez você Curta"
            elements={[
                <News/>,
                <News/>,
                <News/>,
                <News/>,
                <News/>,

            ]}
          />
      </Body>
    </StickyBox>
   
    </Container>


  );
}

export default SideBar;
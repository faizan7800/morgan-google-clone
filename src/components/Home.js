import React from "react";
import "../styles/Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import AvatarIcon from "@material-ui/core/Avatar";
import styled from "styled-components";
import Search from "./Search";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 20px;
    font-size: 15px;
  }
  .left-margin {
    margin-left: 20px;
  }
`;
const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 5px;
  }
`;
function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <Header>
          <p>About</p>
          <p>Store</p>
        </Header>
        <Header>
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <AvatarIcon />
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmw_maXP4rYcUzzGNrHAySc6uVRASViqYu86LHnJkolLodfNQ2_9LfABtNdtFCqRjsHE&usqp=CAU"
          alt="google-logo"
        />
        <div>
          <Search />
        </div>
      </BodyContainer>
      <footer>Made by Morgan Shuler 2022© . All rights reserved </footer>
    </HomeContainer>
  );
}

export default Home;

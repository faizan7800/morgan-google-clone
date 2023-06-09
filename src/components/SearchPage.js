import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { useStateValue } from "../SearchProvider";
import useGoogle from "../useGoogle";
const SearchPageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  img {
    height: 50px;
    margin-top: 40px;
    margin-rigth: 40px;
  }
`;
const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: gray;
    margin-left: 5px;
  }
`;

const Options = styled.div`
  margin-left: ${(props) => (props.right ? "80px" : "0px")};
  display: flex;
  align-items: center;
`;
const SearchPageOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const SearchPageResults = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
  .resultCount {
    color: #70757a;
    font-size: 14px;
  }
  .result {
    margin: 40px 0px;
  }
`;
const SearchPageLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 3px;
  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    margin-right: 10px;
  }
`;
const SearchPageResultTitle = styled.a`
  text-decoration: none;
  h2 {
    font-weight: 500;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const SearchPageResultDesc = styled.p`
  margin-top: 10px;
`;
function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogle();

  console.log(data);
  return (
    <>
      <SearchPageHeader>
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmw_maXP4rYcUzzGNrHAySc6uVRASViqYu86LHnJkolLodfNQ2_9LfABtNdtFCqRjsHE&usqp=CAU"
            alt="google-logo"
          />
        </Link>
        <div>
          <Search hide />
          <SearchPageOptions>
            <Options>
              <SearchPageOption>
                <SearchIcon />
                <Link to="/all">All</Link>
              </SearchPageOption>
              <SearchPageOption>
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </SearchPageOption>
              <SearchPageOption>
                <ImageIcon />
                <Link to="/all">Images</Link>
              </SearchPageOption>
              <SearchPageOption>
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </SearchPageOption>
              <SearchPageOption>
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </SearchPageOption>
              <SearchPageOption>
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </SearchPageOption>
            </Options>
            <Options right>
              <SearchPageOption>
                <Link to="/settings">Settings</Link>
              </SearchPageOption>
              <SearchPageOption>
                <Link to="/tools">Tools</Link>
              </SearchPageOption>
            </Options>
          </SearchPageOptions>
        </div>
      </SearchPageHeader>
      <SearchPageResults>
        <p>About 21, 80, 00, 000 results (1.32 seconds) for TWD</p>
        <div className="result">
          <SearchPageLink href="">
            <img
              src="https://t4.ftcdn.net/jpg/04/79/23/41/360_F_479234182_AmuXKHyYcZcf0QkiFVkDbYX2NiuLG288.jpg"
              alt=""
            />
            thewebdev.tech
          </SearchPageLink>
          <SearchPageResultTitle href="">
            <h2>The Web Dev</h2>
          </SearchPageResultTitle>
          <SearchPageResultDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            architecto, minima quae adipisci natus aliquam soluta fugiat quod
            eligendi.
          </SearchPageResultDesc>
        </div>
      </SearchPageResults>
    </>
  );
}

export default SearchPage;

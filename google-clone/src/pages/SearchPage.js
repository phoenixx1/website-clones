import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";
import Response from "../Response";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //   Live Call
  const { data } = useGoogleSearch(term);

  // Mock API Call
  // const data = Response;
  console.log(data);

  return (
    <SearchPageContainer>
      <SearchPageHeader>
        <Link to="/">
          <SearchPageLogo
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <SearchPageHeaderBody>
          <Search hideButtons />
          <SearchPageOptions>
            <SearchPageOptionsLeft>
              <SearchPageOption>
                <SearchIcon />
                <Link to="/all">All</Link>
              </SearchPageOption>

              <SearchPageOption>
                <Description />
                <Link to="/news">News</Link>
              </SearchPageOption>

              <SearchPageOption>
                <Image />
                <Link to="/images">Images</Link>
              </SearchPageOption>

              <SearchPageOption>
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </SearchPageOption>

              <SearchPageOption>
                <Room />
                <Link to="/maps">Maps</Link>
              </SearchPageOption>

              <SearchPageOption>
                <MoreVert />
                <Link to="/more">More</Link>
              </SearchPageOption>
            </SearchPageOptionsLeft>

            <SearchPageOptionsRight>
              <SearchPageOption>
                <Link to="/settings">Settings</Link>
              </SearchPageOption>

              <SearchPageOption>
                <Link to="/tools">Tools</Link>
              </SearchPageOption>
            </SearchPageOptionsRight>
          </SearchPageOptions>
        </SearchPageHeaderBody>
      </SearchPageHeader>

      {term && (
        <SearchPageResults>
          <SearchPageResultCount>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </SearchPageResultCount>

          {data?.items.map((item) => (
            <SearchPageResult>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <SearchPageResultImage
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>

              <SearchPageResultTitle href={item.link}>
                <h2>{item.title}</h2>
              </SearchPageResultTitle>

              <SearchPageResultSnippet>{item.snippet}</SearchPageResultSnippet>
            </SearchPageResult>
          ))}
        </SearchPageResults>
      )}
    </SearchPageContainer>
  );
}

export default SearchPage;

const SearchPageContainer = styled.div``;

const SearchPageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid lightgray;
`;

const SearchPageLogo = styled.img`
  object-fit: contain;
  height: 50px;
  margin-right: 50px;
`;

const SearchPageHeaderBody = styled.div``;

const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`;

const SearchPageOptionsLeft = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: grey;
  }
`;

const SearchPageOptionsRight = styled(SearchPageOptionsLeft)`
  margin-left: 80px;
`;

const SearchPageOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  a {
    margin-left: 5px;
  }
`;

const SearchPageResults = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
`;

const SearchPageResultCount = styled.p`
  color: #70757a;
  font-size: 14px;
`;

const SearchPageResult = styled.div`
  margin: 40px 0;
`;

const SearchPageResultTitle = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  h2 {
    font-weight: 500;
  }
`;

const SearchPageResultSnippet = styled.p`
  margin-top: 10px;
`;

const SearchPageResultImage = styled.img`
  object-fit: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

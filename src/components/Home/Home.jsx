import { StyledContainer } from "../Container/Container.styled";
import { ImHeadphones } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";
import { FaCarRear } from "react-icons/fa6";
import { GiCarKey } from "react-icons/gi";
import {
  StyledAdvantages,
  StyledHome,
  StyledHomeInfo,
  StyledHomeList,
} from "./Home.styled";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <StyledContainer>
        <StyledHome>
          <h1> Car rental Kyiv: rent a car at an affordable price</h1>
          <NavLink to={"/catalog"}>
            <button type="button">Our cars</button>
          </NavLink>
        </StyledHome>
        <StyledHomeInfo>
          <h2>
            <span>Prestige Drive</span> is the best and most affordable car
            rental service in Ukraine?
          </h2>
          <p>
            We work every day, and at any time we are ready to provide a car,
            choosing the most suitable model for your purposes. Renting a car in
            Ukraine is the optimal solution that will help you save time and
            money to get things done as quickly as possible, or to visit the
            charming corners of our country. Our services are used by
            foreigners, and even foreign delegations, businessmen and ordinary
            ukrainians. Choosing a car from us is always quick, convenient and
            inexpensive.
          </p>
        </StyledHomeInfo>
        <StyledAdvantages>
          <h2>Our advantages</h2>
          <StyledHomeList>
            <li>
              <ImHeadphones size={100} />
              <h2>Assistance</h2>
              <p>Support on the road 24 hours a day</p>
            </li>

            <li>
              <ImCoinDollar size={100} />
              <h2>Affordable prices</h2>
              <p>Car rental with PD it is always beneficial</p>
            </li>

            <li>
              <FaCarRear size={100} />
              <h2>Serviceable cars</h2>
              <p>Our cars pass regular technical inspection</p>
            </li>

            <li>
              <GiCarKey size={100} />
              <h2>Free delivery</h2>
              <p>When renting for more than 3 days</p>
            </li>
          </StyledHomeList>
        </StyledAdvantages>
      </StyledContainer>
    </>
  );
};

export default Home;

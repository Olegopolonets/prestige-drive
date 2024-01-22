import styled from "styled-components";

export const StyledHome = styled.section`
  background: url(https://car-rent.ua/wp-content/uploads/2023/02/car-rent_main_ua.png.webp)
    no-repeat center center/cover;
  height: 400px;
  border-radius: 50px;
  color: var(--white);
  margin-top: 20px;
  margin-bottom: 60px;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  h1 {
    width: 280px;
  }

  button {
    background: transparent;
    padding: 12px 25px;
    border: 2px solid var(--white);
    border-radius: 20px;
    color: var(--white);
    font-size: 20px;
    transition: all 0.3s linear;

    &:hover {
      border-color: var(--general-blue);
      background-color: var(--modal-accent-bg);
      color: var(--general-blue);
    }
  }
`;

export const StyledHomeInfo = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  h2 {
    font-size: 30px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 20px;

    span {
      color: var(--general-blue);
    }
  }
  p {
    font-size: 22px;
    line-height: 1.5;
  }
`;

export const StyledHomeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  li {
    border: 3px solid var(--general-blue);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    height: 300px;
    width: 22%;
    text-align: center;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: transform 0.5s linear;

    &:hover {
      transform: translateY(-10px);
    }

    svg {
      margin-bottom: 20px;
      fill: var(--general-blue);
    }
    h2 {
      margin-bottom: 20px;
      font-size: 26px;
    }
  }
`;

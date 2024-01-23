import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--description-card);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const StyledFormModal = styled.form`
  width: 541px;
  height: 752px;
  background-color: var(--white);
  border-radius: 24px;
  position: relative;
  z-index: -2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  img {
    background: var(--modal-img-bg);
    border-radius: 14px;
    margin-bottom: 14px;
  }
`;

export const StyledClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: transparent;
  background-color: transparent;
`;
export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-family: "Manrope Medium";
    font-size: 18px;
    line-height: 1.33;
    color: var(--black-filter);
    margin-bottom: 8px;

    span {
      color: var(--general-blue);
    }
  }
`;

export const StyledCharacteristic = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-family: "Manrope Regular";
  font-size: 12px;
  color: var(--description-card);
  margin-bottom: 14px;
  line-height: 1.5;
`;

export const StyledDescription = styled.p`
  font-family: "Manrope Regular";
  font-size: 14px;
  line-height: 1.4;
  color: var(--black-filter);
  margin-bottom: 24px;
`;

export const StyledAccessories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;

  h3 {
    font-family: "Manrope Medium";
    font-size: 14px;
    line-height: 1.43;
    color: var(--black-filter);
  }
  p {
    width: 450px;
    color: var(--description-card);
    font-family: "Manrope Regular";
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const StyledConditions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 461px;
  margin-bottom: 24px;

  h3 {
    font-family: "Manrope Medium";
    font-size: 14px;
    line-height: 1.43;
    color: var(--black-filter);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 420px;
  }
  li {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background: var(--modal-accent-bg);
    color: var(--modal-accent-text);
    font-family: "Manrope Regular";
    font-size: 12px;
    line-height: 1.5;

    span {
      color: var(--general-blue);
      font-family: "Montserrat Regular";
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

export const StyledModalButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: var(--general-blue);
  border: none;
  outline: transparent;

  font-family: "Manrope SemiBold";
  font-size: 14px;
  line-height: 1.43;
  color: var(--white);
  &:hover,
  &:focus {
    background-color: var(--general-blue-active);
  }
`;

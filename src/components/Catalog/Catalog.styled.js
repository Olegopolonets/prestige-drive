import styled from "styled-components";

export const StyledCarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  height: 425px;
  margin-bottom: 50px;
  position: relative;
  img {
    border-radius: 14px;
    margin-bottom: 8px;
    position: relative;
    z-index: -1;
  }
`;

export const GradientIMG = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 268px;
  border-radius: 14px;
  opacity: 0.1;
  background: var(--gradient-img);
`;

export const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  h2,
  p {
    font-family: "Manrope Medium";
    font-size: 16px;
    line-height: 1.5;
    color: var(--descr-text);
    span {
      color: var(--general-blue);
    }
  }
`;
export const StyledCardDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;
  p,
  span {
    font-family: "Manrope Regular";
    font-size: 12px;
    color: var(--accent-descr-text);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  background-color: var(--general-blue);
  border: none;
  outline: transparent;
  font-family: "Manrope SemiBold";
  font-size: 14px;
  line-height: 1.43;
  color: var(--white);
  transition: background-color 0.5s linear;
  &:hover,
  &:focus {
    background: var(--general-blue-active);
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 10px;

  background: transparent;
  border: none;
  svg {
    fill: var(--white);
    width: 18px;
    height: 18px;
  }
`;

export const StyledWrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCatalog = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const StyledButtonLoadMore = styled.button`
  color: var(--general-blue);
  font-family: "Manrope Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background: transparent;
  border: none;

  &:hover,
  &:focus {
    color: var(--general-blue-active);
  }
`;

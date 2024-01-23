import React from "react";
import { StyledLoader } from "./Loader.styled";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <StyledLoader>
        <Triangle
          visible={true}
          height="200"
          width="2000"
          color="blue"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </StyledLoader>
    </div>
  );
};

export default Loader;

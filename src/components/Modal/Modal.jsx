import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalIsOpen } from "../../redux/selectors";
import { changeModalOpen } from "../../redux/carsSlice";
import { RxCross2 } from "react-icons/rx";
import {
  StyledAccessories,
  StyledCharacteristic,
  StyledCloseBtn,
  StyledConditionsWrapper,
  StyledModalBackdrop,
  StyledModalBtn,
  StyledModalDesc,
  StyledModalForm,
  StyledTextWrapper,
} from "./Modal.styled";

const Modal = ({ item }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalIsOpen);

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalOpen(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(changeModalOpen(false));
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  const hendleButtonClick = () => {
    dispatch(changeModalOpen(false));
  };

  const city = item?.address?.split(",")[1]?.trim();
  const country = item?.address?.split(",")[2]?.trim();

  const combinedAccFunc = [...item.accessories, ...item.functionalities];
  const joinedAccFunc = combinedAccFunc.join(" | ");

  return (
    <>
      <StyledModalBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledModalForm>
          <StyledCloseBtn
            type="button"
            onClick={() => {
              dispatch(changeModalOpen(false));
            }}
          >
            <RxCross2 size={24} />
          </StyledCloseBtn>
          <img
            src={item?.img || item?.photoLink}
            alt={item?.title}
            width={461}
            height={248}
          />
          <StyledTextWrapper>
            <h2>
              {item?.make}
              <span> {item?.model}</span>, {item?.year}
            </h2>
            <StyledModalDesc>
              <p>{city} |</p>
              <p>{country} |</p>
              <p>Id: {item?.id}</p>
              <p>Year: {item?.year} |</p>
              <p>Type: {item?.type} </p>
              <p>Fuel Consumption: {item?.fuelConsumption} |</p>
              <p>Engine Size: {item?.engineSize}</p>
            </StyledModalDesc>
            <StyledCharacteristic>{item?.description}</StyledCharacteristic>
            <StyledAccessories>
              <h3>Accessories and functionalities:</h3>
              <p>{joinedAccFunc}</p>
            </StyledAccessories>
            <StyledConditionsWrapper>
              <h3>Rental Conditions:</h3>
              <ul>
                {item?.rentalConditions.split("\n").map((condition) => (
                  <li key={condition}>
                    {condition.includes("Minimum age:")
                      ? condition.split(" ").map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            style={
                              word === "Minimum" || word === "age:"
                                ? { color: "var(--modal-accent-text)" }
                                : { color: "var(--button)" }
                            }
                          >
                            {word}&nbsp;
                          </span>
                        ))
                      : condition}
                  </li>
                ))}
                <li>
                  Mileage:{" "}
                  <span>&nbsp;{Number(item?.mileage).toLocaleString()}</span>
                </li>
                <li>
                  Price:{" "}
                  <span>&nbsp;{`${item?.rentalPrice.replace("$", "")}$`}</span>
                </li>
              </ul>
            </StyledConditionsWrapper>
            <StyledModalBtn
              href="tel:+380730000000"
              onClick={hendleButtonClick}
            >
              Rental car
            </StyledModalBtn>
          </StyledTextWrapper>
        </StyledModalForm>
      </StyledModalBackdrop>
    </>
  );
};

export default Modal;

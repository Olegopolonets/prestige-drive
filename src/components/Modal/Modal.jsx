import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalIsOpen } from "../../redux/selectors";
import { changeModalOpen } from "../../redux/carsSlice";
import { RxCross2 } from "react-icons/rx";
import {
  StyledAccessories,
  StyledBackdrop,
  StyledCharacteristic,
  StyledClose,
  StyledConditions,
  StyledDescription,
  StyledFormModal,
  StyledInfo,
  StyledModalButton,
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

  const accesAndFunctional = [
    ...item.accessories,
    ...item.functionalities,
  ].join(" | ");

  return (
    <>
      <StyledBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledFormModal>
          <StyledClose
            type="button"
            onClick={() => {
              dispatch(changeModalOpen(false));
            }}
          >
            <RxCross2 size={24} />
          </StyledClose>
          <img
            src={item?.img || item?.photoLink}
            alt={item?.title}
            width={461}
            height={248}
          />
          <StyledInfo>
            <h2>
              {item?.make}
              <span> {item?.model}</span>, {item?.year}
            </h2>
            <StyledCharacteristic>
              <p>{item?.address?.split(",")[1]?.trim()} |</p>
              <p>{item?.address?.split(",")[2]?.trim()} |</p>
              <p>Id: {item?.id}</p>
              <p>Year: {item?.year} |</p>
              <p>Type: {item?.type} </p>
              <p>Fuel Consumption: {item?.fuelConsumption} |</p>
              <p>Engine Size: {item?.engineSize}</p>
            </StyledCharacteristic>
            <StyledDescription>{item?.description}</StyledDescription>
            <StyledAccessories>
              <h3>Accessories and functionalities:</h3>
              <p>{accesAndFunctional}</p>
            </StyledAccessories>
            <StyledConditions>
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
                                : { color: "var(--general-blue)" }
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
            </StyledConditions>
            <StyledModalButton
              href="tel:+380730000000"
              onClick={hendleButtonClick}
            >
              Rental car
            </StyledModalButton>
          </StyledInfo>
        </StyledFormModal>
      </StyledBackdrop>
    </>
  );
};

export default Modal;

import React, { FC, ReactNode, useEffect, useState } from "react";
import { BackEnd, Container, FrontFace } from "./cartStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart, resetOpenCart } from "../action";
import { AppState } from "../../../init/rootReducer";

type typeProps = {
  children: ReactNode;
  name: { name: string; id: number; open: boolean };
  open: boolean;
};

export const Cart: FC<typeProps> = ({ children, name, open }: typeProps) => {
  const dispatch = useDispatch();
  const { openCards, openCart, disabled } = useSelector(
    (state: AppState) => state.game
  );
  const flipCart = () => {
    if (!disabled) {
      // @ts-ignore
      if (openCards.indexOf(name.name) === -1) {
        dispatch(addCart(name));
      }
    }
  };
  return (
    <Container onClick={flipCart}>
      {open ? <FrontFace>{children}</FrontFace> : <BackEnd></BackEnd>}
    </Container>
  );
};

import React, { FC, ReactNode } from "react";
import { BackEnd, Container, FrontFace } from "./cartStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../action";
import { AppState } from "../../../init/rootReducer";

type typeProps = {
  children: ReactNode;
  name: { name: string; id: number; open: boolean };
  open: boolean;
};

export const Cart: FC<typeProps> = ({ children, name, open }: typeProps) => {
  const dispatch = useDispatch();
  const { openCards, openCard, disabled } = useSelector(
    (state: AppState) => state.game
  );
  const { id } = openCard;
  const flipCart = () => {
    if (!disabled) {
      if (id !== name.id) {
        // @ts-ignore
        if (openCards.indexOf(name.name) === -1) {
          dispatch(addCard(name));
        }
      }
    }
  };

  const icons =
    // @ts-ignore
    openCards.indexOf(name.name) === -1 ? (
      <FrontFace>{children}</FrontFace>
    ) : (
      <FrontFace></FrontFace>
    );
  return (
    <Container onClick={flipCart}>
      {open ? icons : <BackEnd></BackEnd>}
    </Container>
  );
};

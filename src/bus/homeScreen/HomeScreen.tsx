import React, { FC } from "react";
import { TableResults } from "./tableResults/TableResults";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessages } from "../../element/Message/ErrorMesaage";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "./action";
import {
  Button,
  Container,
  InputWrapper,
  NameForm,
  TableWrapper,
} from "./homeScreenStyle";
import { AppState } from "../../init/rootReducer";

export const HomeScreen: FC = () => {
  const { allUsers } = useSelector((state: AppState) => state.home);
  const dispatch = useDispatch();
  return (
    <Container>
      <NameForm>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values) => {
            dispatch(addName(values.name));
          }}
        >
          <Form>
            <InputWrapper>
              <label htmlFor="name">Введите имя</label>
              <Field id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name">
                {(msg) => <ErrorMessages msg={msg} />}
              </ErrorMessage>
            </InputWrapper>
            <Button type="submit">Вперед</Button>
          </Form>
        </Formik>
      </NameForm>
      <TableWrapper>
        <p>Таблица Результатов</p>
        <TableResults users={allUsers} />
      </TableWrapper>
    </Container>
  );
};

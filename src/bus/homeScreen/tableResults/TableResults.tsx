import React, { FC } from "react";
import {
  Container,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./tableResultsStyle";
import { generateTime } from "../../../utils/generateTime";

type user = {
  name: string;
  time: number;
  id: number;
};

type typeProps = {
  users: user[];
};

export const TableResults: FC<typeProps> = ({ users }: typeProps) => {
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((el) => (
            <Tr key={el.id}>
              <Td>{el.name}</Td>
              <Td>{generateTime(el.time)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

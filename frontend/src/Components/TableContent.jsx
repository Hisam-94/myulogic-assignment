import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from "@chakra-ui/react";

const TableContent = ({ data }) => {
  const sheetName = data.name;
  return (
    <Box border={"2px solid black"} borderRadius="10px" m="2rem">
      <Heading mt="2rem">{sheetName}</Heading>
      <TableContainer
        border="1px solid grey"
        borderRadius={"10px"}
        m="2rem 4rem"
      >
        <Table size="md" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Gender</Th>
              <Th>Country</Th>
              <Th>Age</Th>
              <Th isNumeric>Date</Th>
              <Th isNumeric>Id</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.data.map((el) => (
                <Tr key={el.Id}>
                  <Td>{el.Sr_No}</Td>
                  <Td>{el.First_Name}</Td>
                  <Td>{el.Last_Name}</Td>
                  <Td>{el.Gender}</Td>
                  <Td>{el.Country}</Td>
                  <Td>{el.Age}</Td>
                  <Td isNumeric>{el.Date}</Td>
                  <Td isNumeric>{el.Id}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableContent;

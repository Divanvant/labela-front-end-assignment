import * as React from 'react';

import { Button } from 'common';

import { FilterContainer } from './styled';

export const EmployeeFilter = ({ employeeFunctions, filterEmployees }) => {
  return (
    <FilterContainer>
      {employeeFunctions.map((employeeFunction) => (
        <Button key={employeeFunction} onClick={() => filterEmployees(employeeFunction)}>
          {employeeFunction}
        </Button>
      ))}
    </FilterContainer>
  );
};

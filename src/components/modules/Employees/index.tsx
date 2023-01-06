import * as React from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();

  const employees = data?.items[0].employees || [];

  const employeeFunctions: string[] = [];

  return (
    <>
      {isLoading ? (
        <Paragraph>Loading</Paragraph>
      ) : (
        <>
          <EmployeeFilter employeeFunctions={employeeFunctions} />
          <Grid>
            {employees.map((employee) => (
              <Employee employee={employee} key={employee.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

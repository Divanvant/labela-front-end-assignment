import * as React from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';
import { Employee as EmployeeType } from 'types';

type EmployeeFunction = {
  employeeFunction: string;
  count: number;
};

export const Employees = () => {
  const [employees, setEmployees] = React.useState<EmployeeType[]>([]);
  const [allEmployeeFunctions, setAllEmployeeFunctions] = React.useState({});
  const { isLoading, data } = useGetTeam();

  React.useEffect(() => {
    const employees = data?.items[0].employees || [];
    setEmployees(employees);

    const allEmployeeFunctions = employees.reduce((acc, curr) => {
      acc[curr.value.function] = (acc[curr.value.function] || 0) + 1;
      return acc;
    }, {});

    setAllEmployeeFunctions(allEmployeeFunctions);
  }, [data]);

  const getFiltersFunction = () => {
    let filteredEmployeeFunctions: EmployeeFunction[] = [];
    let otherCount: number = 0;
    let otherCategories: string[] = [];
    Object.keys(allEmployeeFunctions).map((item) => {
      if (allEmployeeFunctions[item] > 3) {
        filteredEmployeeFunctions.push({
          employeeFunction: item,
          count: allEmployeeFunctions[item],
        });
      } else {
        otherCategories.push(item);
        otherCount++;
      }
    });

    filteredEmployeeFunctions.push({
      employeeFunction: 'Other',
      count: otherCount,
    });

    return { filteredEmployeeFunctions, otherCategories };
  };

  const employeeFunctions: string[] =
    getFiltersFunction().filteredEmployeeFunctions.map((item) => item.employeeFunction) || [];

  const getFilteredEmployees = (filter, employees) => {
    const { otherCategories } = getFiltersFunction();
    if (filter === 'Other') {
      return employees.filter((item) => otherCategories.includes(item.value.function));
    }
    return employees.filter((item) => item.value.function === filter);
  };

  const filterEmployees = (filterFunction) => {
    const filteredEmployees = getFilteredEmployees(filterFunction, data?.items[0].employees);
    setEmployees(filteredEmployees);
  };

  return (
    <>
      {isLoading ? (
        <Paragraph>Loading</Paragraph>
      ) : (
        <>
          <EmployeeFilter employeeFunctions={employeeFunctions} filterEmployees={filterEmployees} />
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

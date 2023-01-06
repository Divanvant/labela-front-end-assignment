import * as React from 'react';

import { useGetTeam } from 'queries/team';
import { Button, Grid, Modal, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';
import { useGetOffices } from 'queries/offices';
import { Employee as EmployeeType } from 'types';
import { OfficeData } from 'queries/offices/types';
import { NewEmployeeForm } from 'modules/NewEmployeeForm';
import { ButtonWrapper } from 'modules/NewEmployeeForm/styled';

type EmployeeFunction = {
  employeeFunction: string;
  count: number;
};

export const Employees = () => {
  const [employees, setEmployees] = React.useState<EmployeeType[]>([]);
  const [offices, setOffices] = React.useState<OfficeData[]>([]);
  const [allEmployeeFunctions, setAllEmployeeFunctions] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, data: employeeData } = useGetTeam();
  const { data: officeData } = useGetOffices();

  React.useEffect(() => {
    const employees = employeeData?.items[0].employees || [];
    setEmployees(employees);

    const offices = officeData?.items[0].offices || [];
    setOffices(offices);

    const allEmployeeFunctions = employees.reduce((acc, curr) => {
      acc[curr.value.function] = (acc[curr.value.function] || 0) + 1;
      return acc;
    }, {});

    setAllEmployeeFunctions(allEmployeeFunctions);
  }, [employeeData, officeData]);

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
    const filteredEmployees = getFilteredEmployees(
      filterFunction,
      employeeData?.items[0].employees,
    );
    setEmployees(filteredEmployees);
  };

  const getEmployeeOffice = (officeId) => offices.filter((item) => item.id === officeId)[0];

  return (
    <>
      {isLoading ? (
        <Paragraph>Loading</Paragraph>
      ) : (
        <>
          <EmployeeFilter employeeFunctions={employeeFunctions} filterEmployees={filterEmployees} />
          <Grid>
            {employees.map((employee) => (
              <Employee
                employee={employee}
                key={employee.id}
                office={getEmployeeOffice(employee.value.office_id)}
              />
            ))}
          </Grid>
          <Modal.Root
            closeModal={() => setIsOpen(false)}
            openModal={() => setIsOpen(true)}
            isOpen={isOpen}
          >
            <Modal.Trigger>
              <ButtonWrapper>
                <Button onClick={() => setIsOpen(true)}>Add new Employee</Button>
              </ButtonWrapper>
            </Modal.Trigger>
            <Modal.Container>
              <NewEmployeeForm />
            </Modal.Container>
          </Modal.Root>
        </>
      )}
    </>
  );
};

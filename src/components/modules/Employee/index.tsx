import * as React from 'react';
import Image from 'next/image';

import {
  EmployeeContainer,
  EmployeeHeading,
  EmployeeInfoContainer,
  EmployeeSubHeading,
} from './styled';
import { Employee as EmployeeType } from 'queries/types';

type Props = {
  employee: EmployeeType;
};

export const Employee: React.FC<Props> = ({ employee }) => {
  return (
    <EmployeeContainer>
      <EmployeeInfoContainer>
        <EmployeeHeading>{employee.value.name}</EmployeeHeading>
        <EmployeeSubHeading>{employee.value.function}</EmployeeSubHeading>
      </EmployeeInfoContainer>

      <Image
        src={`https://cms.labela.nl${employee.value.image.small}`}
        width={488}
        height={800}
        alt={employee.value.image.alt}
        objectFit="cover"
        objectPosition="top"
      />
    </EmployeeContainer>
  );
};

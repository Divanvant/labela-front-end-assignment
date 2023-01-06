import * as React from 'react';
import Image from 'next/image';

import { EmployeeContainer } from './styled';
import { Employee as EmployeeType } from 'queries/types';

type Props = {
  employee: EmployeeType;
};

export const Employee: React.FC<Props> = ({ employee }) => {
  return (
    <EmployeeContainer>
      <Image
        src={`https://cms.labela.nl${employee.value.image.small}`}
        width={488}
        height={800}
        alt={employee.value.image.alt}
      />
    </EmployeeContainer>
  );
};

import * as React from 'react';
import Image from 'next/image';

import {
  EmployeeContainer,
  EmployeeHeading,
  EmployeeInfoContainer,
  EmployeeSubHeading,
} from './styled';
import { Modal } from 'common';
import { Employee as EmployeeType } from 'queries/types';
import { OfficeData } from 'queries/offices/types';

type Props = {
  employee: EmployeeType;
  office: OfficeData;
};

export const Employee: React.FC<Props> = ({ employee, office }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const getFormattedDate = (date) => {
    const currentDate = new Date(date);
    return currentDate.toLocaleDateString();
  };
  return (
    <>
      <Modal.Root
        closeModal={() => setIsOpen(false)}
        openModal={() => setIsOpen(true)}
        isOpen={isOpen}
      >
        <Modal.Trigger>
          <EmployeeContainer onClick={() => setIsOpen(true)}>
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
        </Modal.Trigger>
        <Modal.Container>
          <Image
            src={`https://cms.labela.nl${employee.value.image.small}`}
            width={488}
            height={488}
            alt={employee.value.image.alt}
            objectFit="cover"
          />
          <br />
          <br />
          <EmployeeHeading>{employee.value.name}</EmployeeHeading>
          <EmployeeSubHeading>{employee.value.function}</EmployeeSubHeading>
          <p>🎉 {getFormattedDate(employee.value.birthdate)}</p>
          <p>🐶 {employee.value.favorite_pet}</p>
          <p>🍟 {employee.value.favorite_food}</p>
          <br />
          <h3>{office?.value?.city || ''} Office</h3>
          <Image
            src={`https://cms.labela.nl${office?.value.image.large}`}
            width={488}
            height={320}
            alt={employee.value.image.alt}
            objectFit="cover"
          />
          <p>📞 {office?.value?.phone_number || ''}</p>
          <p>
            {office?.value?.street || ''}, {office?.value?.street_number || ''}
            <br />
            {office?.value?.zip_code || ''}
          </p>
        </Modal.Container>
      </Modal.Root>
    </>
  );
};

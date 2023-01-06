import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;
  z-index: 0;
`;

export const EmployeeInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  padding: 0.75rem 1rem;
`;

export const EmployeeHeading = styled.h2`
  margin: 0 auto 0.5rem;
`;

export const EmployeeSubHeading = styled.h3`
  margin-top: 0;
`;

import * as RadixModal from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const ModalOverlay = styled(RadixModal.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

export const ModalWrapper = styled(RadixModal.Content)<ModalContentProps>`
  position: relative;
  min-width: 300px;
  font-size: 16px;
  font-family: sans-serif;
  background-color: #ffffff;

  ${({ size }) =>
    size === 'medium' &&
    css`
      max-width: 720px;
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      max-width: 460px;
    `};
`;

export type ModalContentProps = {
  size?: 'small' | 'medium' | 'large';
};

export const ModalContent = styled.div`
  padding: 66px 30px 30px;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 30px;
  border-top: 1px solid #eeeeee;

  button + button {
    margin-left: 8px;
  }
`;

export const ModalClose = styled(RadixModal.Close)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: #000000;
  }
`;

import styled from '@emotion/styled';
import { Modal } from '@mantine/core';

export const DialogConfirmationModal = styled(Modal)<{ colorMode?: string }>`
  & .mantine-Paper-root {
    height: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 99%;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #85878b;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #85878b;
    }
  }
  & .mantine-Modal-title {
    width: 100%;
    margin-right: 4px;
  }
  & .mantine-Modal-header {
    background-color: '#EDF0F8';
    padding: 1rem 32px;
  }
  & .mantine-Modal-body {
    padding: 0rem 32px;
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #85878b;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #85878b;
    }
  }
`;

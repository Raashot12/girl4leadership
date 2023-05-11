import { Loader, MantineNumberSize } from '@mantine/core';
import styled from '@emotion/styled';

const Wrapper = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.bg || '#edf0f8'};
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LoaderAnimation = ({
  size = 'lg',
}: {
  size?: MantineNumberSize;
}) => {
  return (
    <Wrapper bg={'#fffff'}>
      <Loader size={size} variant="bars" color="#E25D24" />
    </Wrapper>
  );
};

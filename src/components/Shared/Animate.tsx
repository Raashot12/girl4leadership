import { keyframes } from '@emotion/react';

export const leftToRightAnimation = keyframes`
    from{
        left: -230px;
        opacity: 0;
    }
    to{
        left: 0;
        opacity: 1
    }
`;

export const rightToLeftAnimation = keyframes`
    from{
        left: 20%;
        opacity: 0;
    }
    to{
        left: 0%;
        opacity: 1;
    }
`;

export const bottomToTopAnimation = keyframes`
       from{
        top: 150px;
        opacity: 0;
    }
    to{
        top: 0;
        opacity: 1;
    }
`;

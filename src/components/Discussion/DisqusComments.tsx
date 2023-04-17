import { Embed } from 'hyvor-talk-react';
import React from 'react';

const DisqusComments = () => {
  return (
    <>
      <Embed
        websiteId={8785}
        id={false}
        palette={{
          accent: '#659DBD',
          accentText: '#FFFFFF',
          footerHeader: '#FAFAFA',
          footerHeaderText: '#484848',
          box: '#FFFFFF',
          boxText: '#111111',
          boxLightText: '#AAAAAA',
          backgroundText: '#111111',
        }}
      />
    </>
  );
};

export default DisqusComments;

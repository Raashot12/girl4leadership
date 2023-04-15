/* eslint-disable @typescript-eslint/no-explicit-any */
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

const DisqusComments = () => {
  const disqusShortname = 'your-disqus-shortname';
  const disqusConfig = {
    url: 'https://www.girls4leadership.org/blogdetails/2',
    identifier: '2', // Single post id
    title: 'Rasheed', // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;

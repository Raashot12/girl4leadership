/* eslint-disable @typescript-eslint/no-explicit-any */
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

const DisqusComments = ({ post }: { post: any }) => {
  const disqusShortname = 'your-disqus-shortname';
  const disqusConfig = {
    url: 'https://your-site-url/post-slug',
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;

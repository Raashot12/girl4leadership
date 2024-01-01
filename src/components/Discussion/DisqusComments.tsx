import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  postTitle: string;
  postSlug: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  postTitle,
  postSlug,
}) => {
  const disqusConfig = {
    shortname: 'girls4leadership-1', // replace with your Disqus shortname
    config: { identifier: postSlug, title: postTitle },
  };

  return <DiscussionEmbed {...disqusConfig} />;
};

export default DisqusComments;

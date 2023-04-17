/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic';

// Dynamically import `DiscussionEmbed` on the client-side only
const DiscussionEmbed = dynamic(
  () => import('disqus-react').then((mod) => mod.DiscussionEmbed),
  { ssr: false }
);
const DisqusComments = () => {
  const disqusShortname = 'girls4leadership';
  const disqusConfig = {
    url: 'https://www.girls4leadership.org/blogdetails/2',
    identifier: '2', // Single post id
    title: 'Rasheed', // Single post title
  };
  return (
    <>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  );
};

export default DisqusComments;

// export default function DisqusComments() {
//   return (
//     <div>
//       <ReactCusdis
//         attrs={{
//           host: 'https://cusdis.com',
//           appId: '76c06919-47ad-4f4f-9247-fb748d05d167',
//           pageId: '2',
//           pageTitle: 'Rasheed',
//           pageUrl: 'https://www.girls4leadership.org/blogdetails/2',
//         }}
//       />
//     </div>
//   );
// }

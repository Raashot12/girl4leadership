/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CategoriesType {
  id: number;
  bgImg: {
    id: number;
    type: string | null;
    image: string;
  }[];
  isSale: boolean;
  name: string;
  amount: string;
  star: number;
  categories: string;
  modalCategories: string[];
  size: string[];
  color:
    | {
        type: string;
        image: string[];
      }[]
    | string[];
}
export type Article = {
  id: number;
  attributes: {
    Title: string;
    Category: string;
    Summary: string;
    IsFeatured: boolean;
    TimeStamp: string;
    Content: Array<{
      type: string;
      children: Array<{
        text: string;
        type: string;
      }>;
    }>;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Popular: boolean | null;
    Thumbnail: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    author: {
      data: {
        id: number;
        attributes: {
          Name: string;
          Occupation: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          profileUrl: string;
        };
      };
    };
    FeaturedImage: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
};

type HeroSection = {
  heroData: {
    title: string;
    subject: string;
    heroImage: string;
    mainTitle: string;
    buttonTextOne: string;
    buttonTextTwo: string;
  };
  ourReach: {
    image: string;
    title: string;
    people: {
      count: string;
      label: string;
    };
    content: string;
    projects: {
      count: string;
      label: string;
    };
    volunteers: {
      count: string;
      label: string;
    };
  };
  statement: {
    ourFuture: {
      title: string;
      content: string;
    };
    ourVision: {
      title: string;
      content: string;
    };
    ourMission: {
      title: string;
      content: string;
    };
  };
  upComingEvent: {
    data: {
      id: number;
      image: string;
      title: string;
      content: string;
      timeStamp: string;
    }[];
    title: string;
    subTitle: string;
  };
  causesScrollData: {
    data: {
      id: number;
      pics: string;
      title: string;
      total: string;
      raised: string;
      content: string;
    }[];
    title: string;
    subTitle: string;
  };
  testimonialCards: {
    data: {
      id: number;
      name: string;
      image: string;
      content: string;
      workPosition: string;
    }[];
    title: string;
    subTitle: string;
  };
  keyfeatures: {
    title: string;
    features: {
      title: string;
      subtitle: string;
    }[];
    subTitle: string;
  };
};

export type DataType = {
  id: number;
  attributes: {
    HeroSection: HeroSection;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

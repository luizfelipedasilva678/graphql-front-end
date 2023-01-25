import { TPosts } from '../../../types/posts';

export const handleOnComplete = (
  data: TPosts,
  setPaginationConfig: React.Dispatch<
    React.SetStateAction<{
      page: number;
      hideNextBtn: boolean;
      hidePrevBtn: boolean;
    }>
  >,
  currentPaginationSettings: {
    page: number;
    hideNextBtn: boolean;
    hidePrevBtn: boolean;
  }
) => {
  const { posts } = data;

  if (posts.length === 0) {
    setPaginationConfig({
      ...currentPaginationSettings,
      page: 1,
      hideNextBtn: true,
    });
  } else {
    setPaginationConfig({
      ...currentPaginationSettings,
      hideNextBtn: false,
    });
  }
};

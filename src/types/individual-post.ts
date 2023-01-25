export interface IndividualPost {
  post: {
    title: string;
    body: string;
    user: {
      username: string;
    };
    comments: Array<{
      comment: string;
      user: {
        username: string;
      };
    }>;
  };
}

export interface Post {
  body: string;
  id: string;
  title: string;
  user: { username: string; __typename: string };
  __typename: string;
}

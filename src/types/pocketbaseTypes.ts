export type CommentType = {
  id: string;
  userId: string;
  text: string;
  created: string;
};

export type BlogType = {
  id: string;
  userId: string;
  title: string;
  text: string;
  created: string;
};

export type BlogCommentType = {
  blogId: string;
} & CommentType;

export type UserType = {
  id: string;
  name: string;
  avatar: string;
};

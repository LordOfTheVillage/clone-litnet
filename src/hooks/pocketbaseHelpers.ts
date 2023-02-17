import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  BlogCommentType,
  UserType,
  BookType,
  BookCommentType,
} from "../types/pocketbaseTypes";

const fetchUserData = async (userId: string | undefined) => {
  const response = await axios.get(`/api/collections/users/records/${userId}`);
  const data: UserType = response.data;
  return data;
};

const fetchBookData = async (bookId: string) => {
  const response = await axios.get(`/api/collections/books/records/${bookId}`);
  const data: BookType = response.data;
  return data;
};

const fetchBlogComments = async (blogId: string) => {
  const response = await axios.get(
    `/api/collections/blogComments/records?filter=(blogId="${blogId}")`
  );
  const data: BlogCommentType[] = response.data.items;
  return data;
};

const fetchBookComments = async (bookId: string) => {
  const response = await axios.get(
    `/api/collections/bookComments/records?filter=(bookId="${bookId}")`
  );
  const data: BookCommentType[] = response.data.items;
  return data;
};

export const useUserData = (userId: string) => {
  const usersData = useQuery({
    queryFn: () => fetchUserData(userId),
    queryKey: [userId],
  });
  return usersData;
};

export const useBookData = (bookId: string) => {
  const bookData = useQuery({
    queryFn: () => fetchBookData(bookId),
    queryKey: [bookId],
  });
  return bookData;
};

//TODO: refactor this hook
export const useUserDataDependent = (userId: string | undefined) => {
  const usersData = useQuery({
    queryFn: () => fetchUserData(userId),
    queryKey: [userId],
    enabled: !!userId,
  });
  return usersData;
};

//I cannot make a single useComment hook to reuse it due to some weird ts error that I cannot fix
export const useBlogComments = (blogId: string) => {
  const blogData = useQuery({
    queryFn: () => fetchBlogComments(blogId),
    queryKey: ["blog comments"],
  });
  return blogData;
};
export const useBookComments = (bookId: string) => {
  const bookComments = useQuery({
    queryFn: () => fetchBookComments(bookId),
    queryKey: ["book comments"],
  });
  return bookComments;
};

export const getImagePath = (
  collectionName: string,
  recordId: string,
  imagePath: string
) => {
  return `http://127.0.0.1:8090/api/files/${collectionName}/${recordId}/${imagePath}`;
};

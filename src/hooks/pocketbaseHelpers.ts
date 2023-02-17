import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BlogCommentType, UserType } from "../types/pocketbaseTypes";

const fetchUserData = async (userId: string | undefined) => {
  const response = await axios.get(`/api/collections/users/records/${userId}`);
  const data: UserType = response.data;
  return data;
};

const fetchBlogComments = async (blogId: string | undefined) => {
  const response = await axios.get(
    `/api/collections/blogComments/records?filter=(blogId="${blogId}")`
  );
  const data: BlogCommentType[] = response.data.items;
  return data;
};

export const useUserData = (userId: string) => {
  const usersData = useQuery({
    queryFn: () => fetchUserData(userId),
    queryKey: [userId],
  });
  return usersData;
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

export const useComments = (
  type: "blogComments" | "bookComments" | "contestComments",
  id: string
) => {
  const queryFunction =
    type === "blogComments" ? () => fetchBlogComments(id) : () => null;
  const commentsData = useQuery({
    queryFn: queryFunction,
    queryKey: ["comments"],
  });
  return commentsData;
};

export const getImagePath = (
  collectionName: string,
  recordId: string,
  imagePath: string
) => {
  return `http://127.0.0.1:8090/api/files/${collectionName}/${recordId}/${imagePath}`;
};

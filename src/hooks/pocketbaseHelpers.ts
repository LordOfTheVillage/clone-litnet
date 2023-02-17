import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserType } from "../types/pocketbaseTypes";

const getUserData = async (userId: string) => {
  const response = await axios.get(`/api/collections/users/records/${userId}`);
  const data: UserType = response.data;
  return data;
};

export const useUserData = (userId: string) => {
  const usersData = useQuery({
    queryFn: () => getUserData(userId),
    queryKey: [userId],
  });
  return usersData;
};

export const getImagePath = (
  collectionName: string,
  recordId: string,
  imagePath: string
) => {
  return `http://127.0.0.1:8090/api/files/${collectionName}/${recordId}/${imagePath}`;
};

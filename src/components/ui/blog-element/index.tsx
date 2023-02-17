import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { getImagePath, useUserData } from "../../../hooks/pocketbaseHelpers";
import avatar from "../../../common/assets/images/avatar.png";

interface BlogElementProps {
  onClick?: () => void;
  blog: {
    userId: string;
    date: string;
    title: string;
    text: string;
  };
}

export const BlogElement = ({ blog }: BlogElementProps) => {
  const userData = useUserData(blog.userId);

  if (userData.isSuccess) {
    console.log(userData.data);
  }

  return (
    <>
      {userData.isSuccess ? (
        <ElementWrapper className="relative flex h-40 flex-col gap-y-5 sm:h-44">
          <div className="text-xl">{blog.title}</div>
          <Avatar
            image={
              userData.data.avatar !== ""
                ? getImagePath("users", userData.data.id, userData.data.avatar)
                : avatar
            }
            name={userData.data.name}
            date={blog.date}
          ></Avatar>
          <div className="overflow-hidden overflow-ellipsis text-sm">
            {blog.text}
          </div>
        </ElementWrapper>
      ) : userData.isLoading ? (
        <p>Loading...</p>
      ) : null}
    </>
  );
};

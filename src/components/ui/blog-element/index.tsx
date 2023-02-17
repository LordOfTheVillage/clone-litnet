import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { getImagePath, useUserData } from "../../../hooks/pocketbaseHelpers";
import avatar from "../../../common/assets/images/avatar.png";
import { Link } from "react-router-dom";

interface BlogElementProps {
  onClick?: () => void;
  id: string;
  userId: string;
  date: string;
  title: string;
  text: string;
}

export const BlogElement = ({
  id,
  userId,
  date,
  title,
  text,
}: BlogElementProps) => {
  const userData = useUserData(userId);

  if (userData.isSuccess) {
    console.log(userData.data);
  }

  return (
    <>
      {userData.isSuccess ? (
        <Link to={`${id}`}>
          <ElementWrapper className="relative flex h-40 flex-col gap-y-5 sm:h-44">
            <div className="text-xl">{title}</div>
            <Avatar
              image={
                userData.data.avatar !== ""
                  ? getImagePath(
                      "users",
                      userData.data.id,
                      userData.data.avatar
                    )
                  : avatar
              }
              name={userData.data.name}
              date={date}
            ></Avatar>
            <div className="overflow-hidden overflow-ellipsis text-sm">
              {text}
            </div>
          </ElementWrapper>
        </Link>
      ) : userData.isLoading ? (
        <p>Loading...</p>
      ) : null}
    </>
  );
};

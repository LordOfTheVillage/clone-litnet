import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { getImagePath, useUserData } from "../../../hooks/pocketbaseHelpers";
import avatar from "../../../common/assets/images/avatar.png";
import { CommentType } from "../../../types/pocketbaseTypes";

export const CommentElement = ({ id, userId, text, created }: CommentType) => {
  const userData = useUserData(userId);
  return (
    <>
      {userData.isSuccess ? (
        <ElementWrapper className="flex w-full flex-col justify-center gap-y-4">
          <Avatar
            image={
              userData.data.avatar !== ""
                ? getImagePath("users", userData.data.id, userData.data.avatar)
                : avatar
            }
            name={userData.data.name}
            date={created}
          />
          <p className="text-sm">{text}</p>
        </ElementWrapper>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

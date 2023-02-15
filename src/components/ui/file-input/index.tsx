import { ChangeEvent, useState } from "react";
import avatar from "../../../common/assets/images/avatar.png";

interface FileInputProps {
  className: string;
}

export const FileInput = ({ className }: FileInputProps) => {
  const [preview, setPreview] = useState(avatar);

  const onLoadFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const file = (e?.target as HTMLInputElement)?.files;
    if (file) {
      const objectUrl = URL.createObjectURL(file[0]);
      setPreview(objectUrl);
    }
  };

  return (
    <div className="relative flex">
      <img
        src={preview}
        alt="avatar"
        className={`${className} rounded border-2 border-zinc-200 object-cover`}
      />
      <input
        required
        type="file"
        onChange={onLoadFile}
        className={`absolute top-0 left-0 flex cursor-pointer opacity-0 ${className}`}
      />
    </div>
  );
};

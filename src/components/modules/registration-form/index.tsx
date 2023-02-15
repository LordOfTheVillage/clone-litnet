import { PrimaryInput } from "../../ui/primary-input";
import { FileInput } from "../../ui/file-input";
import Button from "../../ui/button";

interface registrationProps {}

export const RegistrationForm = ({}: registrationProps) => {
  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <FileInput className="h-32 w-32" />
      <PrimaryInput attributes={{ placeholder: "Логин", required: true }} />
      <PrimaryInput
        attributes={{ placeholder: "E-mail", required: true, type: "email" }}
      />
      <PrimaryInput
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
      />
      <Button className="text-base">Зарегистрироваться</Button>
    </form>
  );
};

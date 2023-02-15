import Button from "../../ui/button";
import { PrimaryInput } from "../../ui/primary-input";

interface authorizationProps {}

export const AuthorizationForm = ({}: authorizationProps) => {
  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <PrimaryInput
        attributes={{ required: true, placeholder: "E-mail", type: "email" }}
      />
      <PrimaryInput
        attributes={{ required: true, placeholder: "Пароль", type: "password" }}
      />
      <Button className="text-base">Войти</Button>
    </form>
  );
};

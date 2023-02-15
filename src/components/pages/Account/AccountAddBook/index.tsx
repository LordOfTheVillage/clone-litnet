import React from "react";
import Button from "../../../ui/button";
import { FileInput } from "../../../ui/file-input";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimarySelect } from "../../../ui/primary-select";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { Wrapper } from "../../../ui/wrapper";

export const AccountAddBook = () => {
  const categories = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <PageWrapper title="Новая книга">
        <div className="flex gap-x-5">
          <FileInput className="h-52 w-40" />
          <div className="flex flex-grow flex-col gap-y-5">
            <PrimaryInput
              attributes={{ placeholder: "Название книги", required: true }}
            />
            <PrimarySelect title="Жанр 1" options={categories} />
            <PrimarySelect title="Жанр 2" options={categories} />
          </div>
        </div>
        <PrimaryTextarea
          attributes={{ placeholder: "Аннотация", required: true }}
        />
        <Button>Сохранить</Button>
      </PageWrapper>
    </Wrapper>
  );
};

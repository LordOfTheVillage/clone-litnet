import React, { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import CommentSection from "../../modules/comment-section";
import { ElementWrapper } from "../../ui/element-wrapper";
import { Icon } from "../../ui/icon";
import { PageWrapper } from "../../ui/page-wrapper";
import { PrimarySelect } from "../../ui/primary-select";
import { Rating } from "../../ui/rating";
import Button from "../../ui/button";
import { Wrapper } from "../../ui/wrapper";
import { useParams } from "react-router-dom";
import {
  getImagePath,
  useBookComments,
  useBookData,
  useUserDataDependent,
} from "../../../hooks/pocketbaseHelpers";
import avatar from "../../../common/assets/images/avatar.png";

type Params = {
  id: string;
};

const book = {
  img: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
  title: "Задача выжить",
  author: "Михаил Атаманов",
  categories: ["Боевик", "Фантастика"],
  annotation:
    "Представьте, что по дороге на работу вы задремали в маршрутке. Вас разбудили крики ужаса, а вокруг творится невесть что - одна за другой взрываются машины на проспекте, люди сгорают словно свечки. А над всем этим хаосом и смертью в небе кружит таинственный боевой корабль треугольной формы. И вот очередь взлететь на воздух доходит и до вашей маршрутки... Вот именно об этом данное произведение",
  commentAmount: 55,
  readAmount: 234,
  rating: 9,
  ratingStatistic: [10, 20, 30, 40, 50],
};

const BookPage = () => {
  let { id } = useParams<Params>();
  const [addedBook, setAddedBook] = useState(false);

  const bookData = useBookData(id!);
  const userId = bookData.data?.userId;
  const userData = useUserDataDependent(userId);

  const bookComments = useBookComments(id!);

  if (bookComments.isSuccess) {
    console.log(bookComments.data);
  }

  return (
    <Wrapper>
      <PageWrapper title="" isTop={true}>
        {bookData.isSuccess && userData.isSuccess ? (
          <>
            <ElementWrapper className="flex gap-x-5">
              <img
                src={
                  bookData.data.image !== ""
                    ? getImagePath(
                        "books",
                        bookData.data.id,
                        bookData.data.image
                      )
                    : avatar
                }
                alt=""
                className="w-1/3"
              />
              <div className="flex w-full flex-col justify-between">
                <div className="relative flex h-full flex-grow flex-col gap-x-10">
                  <h4 className="mb-1 text-2xl">{bookData.data.title}</h4>
                  <div className="mb-4">{userData.data.name}</div>
                  <div className="mb-6 flex flex-wrap gap-x-2">
                    {book.categories.map((item) => (
                      <div
                        key={item}
                        className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm text-base"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-x-7">
                    <Rating
                      rating={book.rating}
                      statistic={book.ratingStatistic}
                    />
                    <Icon title={book.readAmount} icon={<GiBookshelf />} />
                    <Icon
                      title={book.commentAmount}
                      icon={<AiOutlineComment />}
                    />
                  </div>
                </div>

                <div className="flex gap-x-5 justify-self-end">
                  <Button
                    type="secondary"
                    className="w-1/2"
                    onClick={() => setAddedBook(!addedBook)}
                  >
                    {addedBook ? "Добавлена" : "Добавить"}
                  </Button>
                  <Button className="w-1/2">Читать онлайн</Button>
                </div>
                <div className="my-5 h-[1px] w-full bg-slate-300"></div>
                <PrimarySelect
                  title="Содержание"
                  options={[1, 2, 3, 4, 5, 5]}
                ></PrimarySelect>
              </div>
            </ElementWrapper>
            <ElementWrapper className="mb-5">
              <h3 className="mb-2 text-xl">Аннотация</h3>
              <div>{bookData.data.description}</div>
            </ElementWrapper>
          </>
        ) : bookData.isError ? (
          <p>book not found</p>
        ) : (
          <p>loading book data...</p>
        )}
        {bookComments.isSuccess && (
          <CommentSection comments={bookComments.data} />
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default BookPage;

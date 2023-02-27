import React, { useMemo, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../../../Comments/components/CommentSection";
import { ElementWrapper } from "../../../../ui/ElementWrapper";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Rating } from "../../../../ui/Rating";
import Button from "../../../../ui/Button";
import { Wrapper } from "../../../../ui/Wrapper";
import { processImage } from "../../../../../utils/utils";
import useComments from "../../../Comments/api/useComments";
import useBook from "../../api/useBook";
import { PrimaryLink } from "../../../../ui/PrimaryLink";
import { Router } from "../../../../router";
import { useUserContext } from "../../../../context/userContext";
import { usePostBookmark } from "../../../Reader/api/usePostBookmark";
import useChapters from "../../../Account/api/useChapters";

export type Params = {
  id: string;
};

const BookPage = () => {
  const { user } = useUserContext();
  const { id } = useParams<Params>();
  const userBookmark = useMemo(
    () => user?.bookmarks.find((b) => b.bookId === Number(id)),
    [id, user?.bookmarks]
  );
  const addedBook = useMemo(() => !!userBookmark, [userBookmark]);
  const { mutate: addBookmark } = usePostBookmark();
  const { chapters } = useChapters(id!);
  const { data: book, isLoading: bookLoading } = useBook(id!);
  const { data: comments, isLoading: commentsLoading } = useComments(
    "book",
    id!,
    book
  );
  const pageId = useMemo(() => {
    if (!book || !chapters) return 1;
    const chapter = chapters?.find((ch) => ch.id === book.chapters[0].id);
    return chapter && chapter.pages ? chapter.pages[0].id : 1;
  }, [chapters, book]);

  const handleAddBookmark = () => {
    addBookmark({
      userId: user!.id,
      bookId: Number(id),
      chapterId: book!.chapters[0].id,
      pageId: pageId,
    });
  };

  return (
    <Wrapper>
      <PageWrapper title="" isTop={true}>
        {book ? (
          <>
            <ElementWrapper className="flex gap-x-5">
              <img src={processImage(book.img)} alt="" className="w-1/3" />
              <div className="flex w-full flex-col justify-between">
                <div className="relative flex h-full flex-grow flex-col gap-x-10">
                  <h4 className="mb-1 text-2xl">{book.title}</h4>
                  <Link
                    to={`/users/${book.userId}`}
                    className="mb-4 text-indigo-500"
                  >
                    {book.user.name}
                  </Link>
                  <div className="mb-6 flex flex-wrap gap-x-2">
                    {book.genres.map((item) => (
                      <div
                        key={item.id}
                        className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm text-base"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-x-7">
                    <Rating
                      rating={Number(book.rating)}
                      statistic={book.ratings.map((item) => item.rating)}
                    />
                  </div>
                </div>
                <div className="flex gap-x-5 justify-self-end">
                  <Button
                    type="secondary"
                    className={`w-1/2 ${
                      addedBook &&
                      " border-indigo-500 text-indigo-500 hover:cursor-default"
                    }`}
                    onClick={() => {
                      if (addedBook) return;
                      handleAddBookmark();
                    }}
                  >
                    {addedBook ? "Добавлена" : "Добавить"}
                  </Button>
                  <PrimaryLink
                    path={`${Router.reader}/${id}`}
                    className="w-1/2 text-center"
                  >
                    Читать онлайн
                  </PrimaryLink>
                </div>
                <div className="my-5 h-[1px] w-full bg-slate-300"></div>
                <PrimarySelect
                  title="Содержание"
                  options={chapters?.map((ch) => ch.title) as string[]}
                ></PrimarySelect>
              </div>
            </ElementWrapper>
            <ElementWrapper className="mb-5">
              <h3 className="mb-2 text-xl">Аннотация</h3>
              <div>{book.description}</div>
            </ElementWrapper>
          </>
        ) : bookLoading ? (
          <p>loading book data...</p>
        ) : (
          <p>error loading book data</p>
        )}
        {comments ? (
          <CommentSection id={id!} type="book" comments={comments} />
        ) : commentsLoading ? (
          <p>loading comments...</p>
        ) : (
          <p>error loading comments</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default BookPage;

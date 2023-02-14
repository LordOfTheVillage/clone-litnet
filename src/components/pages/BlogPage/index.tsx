import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import CommentSection from "../../modules/comment-section";

type Params = {
  id: string;
};

const mockBlog = {
  title: "Test Blog",
  author: "John Doe",
  datePosted: "05.02.2023",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  comments: [
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 2",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 3",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 15",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
  ],
};

const BlogPage = () => {
  const { id } = useParams<Params>();
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <h3 className="self-start text-2xl font-medium">{mockBlog.title}</h3>
        <div className="flex w-full items-center justify-between self-start bg-gray-50 py-2 px-4 dark:bg-zinc-700">
          <p className="text-xs">
            Автор: <span className="text-blue-500">{mockBlog.author}</span> /
            Добавлено: {mockBlog.datePosted}
          </p>
          <button className="rounded border border-gray-300 py-0.5 px-2 text-xs">
            Добавить в библиотеку
          </button>
        </div>
        <p>{mockBlog.text}</p>
        <CommentSection comments={mockBlog.comments} />
      </PageWrapper>
    </Wrapper>
  );
};

export default BlogPage;

import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import CommentSection from "../../modules/comment-section";
import axios from "axios";
import { BlogType } from "../../../types/pocketbaseTypes";
import { useQuery } from "@tanstack/react-query";
import {
  useBlogComments,
  useUserDataDependent,
} from "../../../hooks/pocketbaseHelpers";

type Params = {
  id: string;
};

const BlogPage = () => {
  const { id } = useParams<Params>();
  const fetchBlogData = async (blogId: string) => {
    const response = await axios.get(
      `/api/collections/blogs/records/${blogId}`
    );
    const data: BlogType = response.data;
    return data;
  };
  const blogQuery = useQuery({
    queryFn: () => fetchBlogData(id!),
    queryKey: [id],
  });
  const userId = blogQuery.data?.userId;

  const userData = useUserDataDependent(userId);

  const blogComments = useBlogComments(id!);

  if (blogComments.isSuccess) {
    console.log(blogComments.data);
  }

  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {blogQuery.isSuccess && userData.isSuccess ? (
          <>
            <h3 className="self-start text-2xl font-medium">
              {blogQuery.data.title}
            </h3>
            <div className="flex w-full items-center justify-between self-start bg-gray-50 py-2 px-4">
              <p className="text-xs">
                Автор:{" "}
                <span className="text-blue-500">{userData.data.name}</span> /
                Добавлено: {blogQuery.data.created}
              </p>
              <button className="rounded border border-gray-300 py-0.5 px-2 text-xs">
                Добавить в библиотеку
              </button>
            </div>
            <p>{blogQuery.data.text}</p>
            {blogComments.isSuccess ? (
              <CommentSection comments={blogComments.data!} />
            ) : (
              <p>loading comments...</p>
            )}
          </>
        ) : (
          <p>loading blog data...</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default BlogPage;

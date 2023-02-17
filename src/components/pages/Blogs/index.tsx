import React from "react";
import { PageWrapper } from "../../ui/page-wrapper";
import { BlogElement } from "../../ui/blog-element";
import { Wrapper } from "../../ui/wrapper";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BlogCommentType, BlogType } from "../../../types/pocketbaseTypes";

const Blogs = () => {
  const fetchBlogs = async () => {
    const response = await axios.get("/api/collections/blogs/records");
    const data: BlogType[] = response.data.items;
    return data;
  };

  const fetchBlogComments = async (blogId: string) => {
    const response = await axios.get(
      `/api/collections/blogComments/records?filter=(blogId="${blogId}")`
    );
    const data: BlogCommentType[] = response.data.items;
    return data;
  };

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (blogsQuery.isSuccess) {
    console.log(blogsQuery.data);
  }

  return (
    <Wrapper className="flex items-start">
      <PageWrapper title="Литературные блоги" isTop={true}>
        {blogsQuery.isLoading && <p>Loading blogs...</p>}
        {blogsQuery.isSuccess &&
          blogsQuery.data.map((blog) => (
            <BlogElement
              key={blog.id}
              blog={{
                date: blog.created,
                userId: blog.userId,
                title: blog.title,
                text: blog.text,
              }}
            />
          ))}
      </PageWrapper>
    </Wrapper>
  );
};

export default Blogs;

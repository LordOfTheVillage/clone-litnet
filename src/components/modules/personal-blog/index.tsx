import { useParams } from "react-router-dom";
import { useFetchBlogs } from "../../../hooks";
import { PageWrapper } from "../../ui/page-wrapper";
import { PersonalBlogElement } from "../../ui/personal-blog-element";

export const PersonalBlog = () => {
  const { id } = useParams();
  const { blogs } = useFetchBlogs(id as string);
  return blogs ? (
    <PageWrapper title="Личный блог">
      <>
        {blogs.map(({ createdAt, title, text }, i) => {
          return (
            <PersonalBlogElement
              key={i}
              blog={{ date: createdAt, title, text }}
            ></PersonalBlogElement>
          );
        })}
      </>
    </PageWrapper>
  ) : (
    <h1> loading</h1>
  );
};

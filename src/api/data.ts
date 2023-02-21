//TODO: improve typing
import axios from "axios";
import {
  BlogType,
  BookType,
  GenreType,
  BlogCommentType,
  DetailedBookType,
  BookCommentType,
  ContestType,
  ContestCommentType,
} from "../types/types";

const baseUrl = "https://litnet.herokuapp.com";

export const fetchUserData = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/users/${userId}`);
  const data: {
    id: string;
    name: string;
    image: string;
  } = response.data;
  return data;
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${baseUrl}/genre`);
    if (response.status === 200) {
      const data: GenreType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/books`);
    if (response.status === 200) {
      const data: BookType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBookById = async (bookId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/books/${bookId}`);
    if (response.status === 200) {
      const data: DetailedBookType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      const data: BlogType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchUserBlogs = async (userId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/user/${userId}`);
    if (response.status === 200) {
      const data: BlogType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBlogById = async (blogId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/${blogId}`);
    if (response.status === 200) {
      const data: BlogType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBlogComments = async (blogId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog-comment/blog/${blogId}`);
    if (response.status === 200) {
      const data: BlogCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBookComments = async (bookId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/book-comments/book/${bookId}`);
    if (response.status === 200) {
      const data: BookCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

export const fetchContests = async () => {
  try {
    const response = await axios.get(`${baseUrl}/contest`);
    if (response.status === 200) {
      const data: ContestType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

export const fetchContest = async (contestId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/contest/${contestId}`);
    if (response.status === 200) {
      const data: ContestType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

export const fetchContestComments = async (contestId: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/contest-comment/contest/${contestId}`
    );
    if (response.status === 200) {
      const data: ContestCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

export const createBook = async (
  title: string,
  description: string,
  userId: string,
  genres: string
) => {
  const response = await axios.post(`${baseUrl}/books`, {
    title,
    description,
    userId,
    genres,
  });
  return response.data;
};

export const createBlog = async (
  title: string,
  text: string,
  userId: string
) => {
  const response = await axios.post(`${baseUrl}/blog`, {
    title,
    text,
    userId,
  });
  return response.data;
};

export const createContest = async (formData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}/contest`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

export const postBlogComment = async (
  blogId: string | number,
  userId: string | number,
  text: string
) => {
  const response = await axios.post(`${baseUrl}/blog-comment`, {
    blogId,
    userId,
    text,
  });
  return response.data;
};

export const postBookComment = async (
  bookId: string | number,
  userId: string | number,
  text: string
) => {
  const response = await axios.post(`${baseUrl}/book-comments`, {
    bookId,
    userId,
    text,
  });
  return response.data;
};

export const postContestComment = async (
  contestId: string | number,
  userId: string | number,
  text: string
) => {
  try {
    const response = await axios.post(`${baseUrl}/contest-comment`, {
      contestId,
      userId,
      text,
    });
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

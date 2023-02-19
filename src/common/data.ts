import { BookElementType, BookType } from "../types/types";

export const books: BookType[] = [
  {
    id: 3232323,
    img: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
    title: "Задача выжить",
    user: { name: "Михаил Атаманов" },
    genres: [
      { id: 1121, name: "Боевик" },
      { id: 111, name: "фантастика" },
    ],
    description:
      "Представьте, что по дороге на работу вы задремали в маршрутке. Вас разбудили крики ужаса, а вокруг творится невесть что - одна за другой взрываются машины на проспекте, люди сгорают словно свечки. А над всем этим хаосом и смертью в небе кружит таинственный боевой корабль треугольной формы. И вот очередь взлететь на воздух доходит и до вашей маршрутки... Вот именно об этом данное произведение",
    rating: "8.9",
    comments: [],
    bookmarks: [],
  },
];

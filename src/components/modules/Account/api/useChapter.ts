import { useQuery } from "@tanstack/react-query";
import { ChapterType } from "../../../../types/types";
import { getChapter } from "../../../../api/service";

const useChapter = (id: string) => {
  const { data: chapter } = useQuery<ChapterType>({
    queryKey: ["chapters", id],
    queryFn: async () => getChapter(id),
    staleTime: 1000,
  });

  return { chapter };
};

export default useChapter;

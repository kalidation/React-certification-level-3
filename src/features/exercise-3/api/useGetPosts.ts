import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./constant";
import { Post } from "../model/Post";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      return (await response.json()) as Post[];
    },
  });
};

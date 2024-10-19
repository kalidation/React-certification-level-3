import { useQuery } from "@tanstack/react-query";
import { User } from "../model/User";
import { BASE_URL } from "./constant";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users`);
      return (await response.json()) as User[];
    },
  });
};

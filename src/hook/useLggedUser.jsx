import { useQuery } from "@tanstack/react-query";
import useAxiosSequire from "./useAxiosSequire";
import useContexts from "./useContexts";

const useUser = () => {
  const { user } = useContexts();
  const axiosSecure = useAxiosSequire();

  const { data: users, isLoading: loading } = useQuery(
    ["isUser", user?.email],
    async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data.admin;
    }
  );

  return [users, loading];
};

export default useUser;

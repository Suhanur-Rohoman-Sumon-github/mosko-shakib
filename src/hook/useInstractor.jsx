import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import useAxiosSequire from "./useAxiosSequire";

const useInstractor = () => {
  const { user } = useContexts();
  const axiosSecure = useAxiosSequire();

  const { data: isInstructor, isLoading: loading, error } = useQuery(
    ["isInstructor", user?.email],
    async () => {
      try {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res.data.instructor;
      } catch (error) {
        throw new Error("Failed to fetch instructor data");
      }
    }
  );

  if (error) {
    // Handle error state as needed
  }

  return [isInstructor, loading];
};

export default useInstractor;

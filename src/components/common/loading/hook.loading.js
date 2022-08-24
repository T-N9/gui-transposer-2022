import { useSelector } from "react-redux";

const Hook = () => {
  const { loading } = useSelector((state) => state.general);

  return {
    loading,
  };
};

export default Hook;

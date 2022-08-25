import { useSelector } from "react-redux";

const Hook = () => {
  const { profile } = useSelector((state) => state.userData);
  const userProfile = profile[0];
  const userName = userProfile !== null && userProfile?.name;
  let matches = userName && userName?.match(/\b(\w)/g);
  let profileName = userName && matches.join("").slice(0, 2);

  return {
    profileName
  };
};

export default Hook;

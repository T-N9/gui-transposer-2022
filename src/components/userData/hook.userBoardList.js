import { database } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Hook = () => {
  const userId = localStorage.getItem("gui-userId");
  const boardDatabaseRef = collection(database, `gui-users/${userId}/boards`);

  getDocs(boardDatabaseRef).then((res) => {
    console.log(res.docs.map((item) => item.data()));
  });

  return {};
};

export default Hook;

import { database } from "./firebase-config";

import { getAuth } from "firebase/auth";

/* Firebase utilities */
import { collection } from "firebase/firestore";

const HookFirebaseAssets = () => {
  const auth = getAuth();

  //   User Collection
  const userCollection = collection(database, "gui-users");
  const getSessionUserInfo = JSON.parse(localStorage.getItem("gui-userInfo"));
  const adminCollection = collection(database, "gui-admins");
  const publicBoardsCollection = collection(database, "public-boards");

  return {
    auth,
    userCollection,
    getSessionUserInfo,
    adminCollection,
    publicBoardsCollection
  };
};

export default HookFirebaseAssets;

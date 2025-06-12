import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    //const credentials = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user;
    const { displayName, email, photoURL, uid } = user;
    return {
      ok: true,
      //userInfo
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.errorMessage;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

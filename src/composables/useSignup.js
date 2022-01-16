import { ref } from "vue";

//firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
let isPending = ref(false);

const signup = async (email, password) => {
  error.value = null;
  isPending = true;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }
    error.value = null;
    isPending = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const userSignup = () => {
  return { error, isPending, signup };
};

export default userSignup;

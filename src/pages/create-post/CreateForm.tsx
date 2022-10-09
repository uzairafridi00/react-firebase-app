import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const schema = yup.object().shape({
    title: yup.string().required("Add a Title*"),
    description: yup.string().required("Add a Description*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    // console.log(data);
    navigate("/");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onCreatePost)}>
        <input type="text" placeholder="Title..." {...register("title")} />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <textarea placeholder="Description..." {...register("description")} />
        <p style={{ color: "red" }}>{errors.description?.message}</p>
        <input type="submit" className="submitForm"/>
      </form>
    </>
  );
};

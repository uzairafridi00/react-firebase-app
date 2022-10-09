import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login")
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
            <Link to="/login">Login</Link>
        ): (
            <Link to="/create-post">Create Post</Link>
        )}
         
        
      </div>

      {user && (
        <>
          <div className="user">
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="60"
              height="60"
              alt="Profile Pic"
            />
            <button onClick={signUserOut}>Log Out</button>
          </div>
        </>
      )}

      {/* <div className="user">
        <p>{auth.currentUser?.displayName}</p>
        <img
          src={auth.currentUser?.photoURL || ""}
          width="100"
          height="100"
          alt="Profile Pic"
        />
      </div> */}
    </div>
  );
};

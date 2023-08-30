import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle">G</button>
        </div>
    );
};

export default SocialLogin;
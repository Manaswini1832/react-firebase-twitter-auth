import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    //Firebase config here
};

class Firebase{
    constructor() {
        this.app = app.initializeApp(firebaseConfig);
    }

    signUserIn = async() => {
        const provider = new app.auth.TwitterAuthProvider();
        app
        .auth()
        .signInWithPopup(provider);
    }
}

export default Firebase;
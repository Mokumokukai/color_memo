import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADAtsysHhQMlpLvto8K-IsqAEZ6FV2f0M',
  authDomain: 'color-memo-auth.firebaseapp.com',
  projectId: 'color-memo-auth',
  storageBucket: 'color-memo-auth.appspot.com',
  messagingSenderId: '361856201424',
  appId: '1:361856201424:web:57f58dec3be7691caa24d5',
  measurementId: 'G-GRX6FSZLMZ',
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
type Error = {
  message: string;
};
const SignInPage = function () {
  const auth = getAuth();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new GoogleAuthProvider();
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    signInWithPopup(auth, provider)
      .then((user) => {
        if (user.user.displayName === null) {
          throw new Error('failed to login');
        }
        alert(`success : ${user.user.displayName}さんでログインしました`);
        async function setToken() {
          const token = await auth.currentUser?.getIdToken(true);
          if (token !== undefined) {
            localStorage.setItem('token', token);
          }
        }
        // eslint-disable-next-line
        async () => await setToken();
        navigate('/');
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="login">
        <h1>ログイン</h1>
      </div>
      <div
        className="signin_button"
        onClick={() => signInWithGoogle()}
        onKeyDown={() => signInWithGoogle()}
        role="button"
        tabIndex={0}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/google/1x/btn_google_signin_dark_disabled_web.png`}
          alt="google signin"
        />
      </div>
    </div>
  );
};

export default SignInPage;

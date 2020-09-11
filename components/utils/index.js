import { signIn, signOut, useSession } from 'next-auth/client';

// get session info
export const getSessionInfo = () => {
    const [session] = useSession();
    session && console.log(session.user);
    const handleSignIn = session ? signOut : signIn;
    const signInText = session ? 'Sign Out' : 'Sign In';
    return ({ signInText, handleSignIn, session });
};

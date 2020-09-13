import { signIn, signOut, useSession } from 'next-auth/client';
import axios from 'axios';
// get session info
export const getSessionInfo = () => {
    const [session] = useSession();
    const handleSignIn = session ? signOut : signIn;
    const signInText = session ? 'Sign Out' : 'Sign In';
    return ({ signInText, handleSignIn, session });
};

export const getUserId = () => {
    const [session] = useSession();
    const { user: { image = '' } } = session || {};
    const match = image.match('/u/(.*)?')[1];
    return (match.substr(0, match.indexOf('?'))) || '';
};

// initiate calls
export const initiateCall = (url = '/api/survey/save-survey', data = null) => {
    axios.get(url, {
        query: data
    })
        .then(response => response)
        .catch(err => err);
};

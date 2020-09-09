import React from 'react';
import Surveys from '../components/organisms/Surveys';
import Header from '../components/organisms/Header';
import { getSessionInfo } from '../utils';

export default function Survey() {
    const { handleSignIn, signInText = '', session = null } = getSessionInfo();
    return (
        <div className={'survey-container'}>
            <Header
                componentName={'Surveys'}
                handleSignIn={handleSignIn}
                text={signInText} />
            {session && <Surveys sessionData={session.user} />}
        </div>
    );
}

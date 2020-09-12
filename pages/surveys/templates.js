import React from 'react';
import Templates from '../../components/organisms/Templates';
import Header from '../../components/organisms/Header';
import { getSessionInfo } from '../../components/utils';

export default function Template() {
    const { handleSignIn, signInText = '', session = null } = getSessionInfo();
    return (
        <div className={'survey-container'}>
            <Header
                componentName={'Templates'}
                handleSignIn={handleSignIn}
                text={signInText} />
            {session && <Templates sessionData={session.user} />}
        </div>
    );
}

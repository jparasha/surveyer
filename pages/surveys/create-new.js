import React from 'react';
import Creator from '../../components/organisms/Creator';
import Header from '../../components/organisms/Header';
import { getSessionInfo } from '../../components/utils';

export default function Create() {
    const { handleSignIn, signInText = '', session = null } = getSessionInfo();
    return (
        <div className={'survey-container'}>
            <Header
                componentName={'Create Survey'}
                handleSignIn={handleSignIn}
                text={signInText} />
            {session && <Creator sessionData={session.user} />}
        </div>
    );
}

import React from 'react';
import Dashboard from '../components/organisms/Dashboard';
import Header from '../components/organisms/Header';
import { getSessionInfo } from '../components/utils';

export default function HomePage() {
    const { handleSignIn, signInText = '', session = null } = getSessionInfo();
    return (
        <div className={''}>
            <Header
                componentName={'DashBoard'}
                handleSignIn={handleSignIn}
                text={signInText} />
            {session &&
                <Dashboard
                    sessionData={session.user}
                    href={'/create-survey'}
                />}
        </div>
    );
}

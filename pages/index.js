import React from 'react';
import Dashboard from '../components/organisms/Dashboard';
import Header from '../components/organisms/Header';
import HomePageComponent from '../components/organisms/Homepage';
import { getSessionInfo } from '../components/utils';

export default function HomePage() {
    const { handleSignIn, signInText = '', session = null } = getSessionInfo();
    return (
        <div className={''}>
            <Header
                componentName={'DashBoard'}
                handleSignIn={handleSignIn}
                text={signInText} />
            {!session && <HomePageComponent handleSignIn={handleSignIn} />}
            {session &&
                <Dashboard
                    sessionData={session.user}
                    href={'/surveys'}
                />}
        </div>
    );
}

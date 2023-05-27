import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

/* eslint-disable */

test('Renders sign in link', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    // screen.debug();
    const signInLink = screen.getByRole('link', {name: 'Sign In'});
    expect(signInLink).toBeInTheDocument();
});

test('Renders sign up link', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const signUpLink = screen.getByRole('link', {name: 'Sign Up'});
    expect(signUpLink).toBeInTheDocument();
});

test('Renders latest link', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const latestLink = screen.getByRole('link', {name: 'Latest'});
    expect(latestLink).toBeInTheDocument();
});

test('Renders home link', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const homeLink = screen.getByRole('link', {name: 'Home'});
    expect(homeLink).toBeInTheDocument();
});

test('Renders link to the gear page for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    
    const gearPageLink = await screen.findByText("Gear");
    expect(gearPageLink).toBeInTheDocument();
});

test('Renders link to the rig page for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    
    const rigPageLink = await screen.findByText("Rigs");
    expect(rigPageLink).toBeInTheDocument();
});

test('Renders link to the feed page for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    
    const feedPageLink = await screen.findByText("Feed");
    expect(feedPageLink).toBeInTheDocument();
});

test('Renders link to the saved page for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    
    const savedPageLink = await screen.findByText("Saved");
    expect(savedPageLink).toBeInTheDocument();
});

test('Renders sign in and sign up buttons again on log out', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    
    const signOutLink = await screen.findByRole('link', {name: 'Sign out'});
    fireEvent.click(signOutLink);

    const signInLink = await screen.findByRole('link', {name: 'Sign In'});
    const signUpLink = await screen.findByRole('link', {name: "Sign Up"});

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
});

/* eslint-enable */
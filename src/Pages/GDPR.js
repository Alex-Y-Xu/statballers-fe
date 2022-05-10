import React from 'react'
import styled from "styled-components";

const Background = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    // position: fixed;
    position: relative;

    width: 600px;
    height: 550px;
    border-radius: 15px;
    background-color: #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    transform: translate(100%, 50%);
`;

const Scroll = styled.div`
    margin-top: 20px;
    width: 550px;
    height: 450px;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #787878;
`;

const Text = styled.p`
    text-align: start;
    margin: 10px;
`;

const Button = styled.button`
    margin: 10px;
    height: 50px;
    width: 230px;
    background-color: black;
    color: white;
    border-style: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
`;


const GDPR = props => {
  return (
    <Background>
        <Container>
            <Scroll>
                <Text> 
                    <p style={{fontWeight: 'bolder', margin: '0'}}>Privacy Policy</p>
                    <br></br>
                    <p>Our company is Stat Ballers and the following privacy policy will explain how our web app uses the personal data we collect from you when you use it.</p>
                    <p style={{fontWeight: 'bold'}}>Topics:</p>
                    <ul>
                        <li>What data do we collect?</li>
                        <li>How do we collect, use and store your data?</li>
                        <li>What are your data protection rights?</li>
                        <li>What are cookies and how do we use them?</li>
                        <li>What type of cookies do we use?</li>
                        <li>How to manage your cookies?</li>
                        <li>Changes to our privacy policy</li>
                        <li>How to contact us?</li>
                        <li>How to contact the appropriate authorities?</li>
                    </ul>
                    <p style={{fontWeight: 'bold'}}>What data do we collect?</p>
                    <p>Stat Ballers collects the following data:</p>
                    <ul>
                        <li>Username</li>
                        <li>Password</li>
                        <li>The names of your teams and the players in them</li>
                        <li>The statistics of the players</li>
                        <li>The names of the competitions you are tracking</li>
                    </ul>
                    <p style={{fontWeight: 'bold'}}>How do we collect, use, and store your data?</p>
                    <p>You directly provide Stat Ballers with most of the data that we collect. We collect data and process data when you:</p>
                    <ul>
                        <li>Register to access the web app</li>
                        <li>Create a new team, player, or competition</li>
                        <li>Update the statistics of your players</li>
                    </ul>
                    <p style={{fontWeight: 'bold'}}>Stat Ballers collects your data so that we can:</p>
                    <ul>
                        <li>Track which teams in the database belong to you</li>
                        <li>Allow you to organise, view, and edit your teams</li>
                        <li>Allow you to view and edit player statistics </li>
                    </ul>
                    <p>Stat Ballers securely stores your data in the U.K. and the data will be securely stored. Passwords and other sensitive data will be hashed, and anonymize other user data.</p>
                </Text>
            </Scroll>
            <Button onClick={() => props.clickAgree(true)}>I Accept</Button>
        </Container>
    </Background>
  );
}

export default GDPR
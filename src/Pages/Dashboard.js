import React, {useState} from 'react'
import styled from "styled-components";
import GDPR from './GDPR';

import { Link } from 'react-router-dom';


const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #9ab97d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TeamEntry = styled.div`
    width: 1000px;
    height: 150px;
    background-color: #7632ef;
    border: 2px solid black;
    display: grid;
    grid-template-columns: 350px 650px;
    align-items: center;
    margin: 5px;
`;

const TeamButtons = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;

`;

const Button = styled.button`
    height: 60px;
    width: 200px;
    color: ${props => props.color};
    background-color: ${props => props.bg};
    border-style:none;
    border-radius: 6px;
    font-size: 22px;
    font-weight: 800;
    border: 2px black solid;
    cursor: pointer;
`;

const teams = [
    {
        id: 1,
        name: 'Team 40 FC'
    },
    {
        id: 2,
        name: 'CSS 0'
    },
    {
        id: 3,
        name: 'CSS 1'
    }
]

function Dashboard() {
    const [clickedAgree, clickAgree] = useState(false);

    return (
    <Container>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '1000px', alignItems: 'center'}}>
            <h1>Your teams</h1>
            <Button bg={'#7632ef'} color='white'>New Team</Button>
        </div>
        
        {
            teams.map(team => {
                const {name, id} = team;
                return (
                    <TeamEntry>
                        <h1 style={{color: 'white'}}>{team.name}</h1>
                        <TeamButtons>
                            <Button color={'#7632ef'}>New Season</Button>
                            <Link to={`/newmatch/${id}`} state={{name: name, id:id}}>
                                <Button color={'#7632ef'}>New Match</Button>
                            </Link>
                            <Link to={`/leaderboard/${id}`} state={{name: name, id:id}}>
                                <Button color={'#7632ef'} style={{fontSize: '19px'}}>View Leaderboard / Edit Team</Button>
                            </Link>
                        </TeamButtons>
                    </TeamEntry>
                );
            })
        }
        {
            clickedAgree === false  &&
            <GDPR clickAgree={clickAgree}></GDPR>
        }


    </Container>
    )
}

export default Dashboard
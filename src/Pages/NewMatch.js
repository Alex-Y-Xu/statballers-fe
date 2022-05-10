import React, {useState} from "react";
import styled from "styled-components";
import {colLabels} from './Leaderboard';
import Player from "../Components/Player";

// import { Link } from 'react-router-dom';
const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #9ab97d;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
`;

const StatsContainer = styled.div`
    width: 90%;
    height: 900px;
    background-color: #7632ef;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const filtered = colLabels.filter((stat, id) => id < 12 && id > 0);

const StatContainer = styled.div`
    background-color: ${props => props.bg};
    width: 85%;
    display: flex;
    justify-content space-between;
    align-items: center;
`;

const NumberButton = styled.button`
    width: 25px;
    height: 25px;
    border-style: none;
    border-radius: 50%;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    cursor: pointer;
    font-size: 18px;
`;

const TeamRow = styled.div`
    display: flex;
    justify-content: centre;
    align-items: centre;
`;


const NewMatch = () => {
    const [players, setPlayers] = useState([
        {
            name: 'Sheikh',
            shirtNumber: 1,
            goals: 0,
            passes: 0,
            assists: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Xu',
            shirtNumber: 5,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Hijazi',
            shirtNumber: 7,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Big Jim',
            shirtNumber: 10,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Lera',
            shirtNumber: 8,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Chris',
            shirtNumber: 2,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Adam',
            shirtNumber: 4,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Maguire',
            shirtNumber: 69,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Shearer',
            shirtNumber: 9,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Henry',
            shirtNumber: 11,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        },
        {
            name: 'Cisse',
            shirtNumber: 17,
            goals: 0,
            assists: 0,
            passes: 0,
            keyPasses: 0,
            tackles: 0,
            successfulDribbles: 0,
            unsuccessfulDribbles: 0,
            fouls: 0,
            shotsOnTarget: 0,
            shotsOffTarget: 0,
            lostBalls: 0,
            minutesPlayed: 0
        }
    ]);
    const [selectedPlayer, setPlayer] = useState(0);
    const [formation, setFormation] = useState([1, 3, 4, 2, 1]);

    const incrementPlayerStat = (id, stat) => {
        if (stat === "Goals") setPlayers([
            ...players.slice(0, id),
            {...players[id], goals: players[id].goals+1},
            ...players.slice(id + 1),
        ])
        else if (stat === 'Assists') setPlayers([
            ...players.slice(0, id),
            {...players[id], assists: players[id].assists+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Passes') setPlayers([
            ...players.slice(0, id),
            {...players[id], passes: players[id].passes+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Key Passes') setPlayers([
            ...players.slice(0, id),
            {...players[id], keyPasses: players[id].keyPasses+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Tackles') setPlayers([
            ...players.slice(0, id),
            {...players[id], tackles: players[id].tackles+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Successful dribbles') setPlayers([
            ...players.slice(0, id),
            {...players[id], successfulDribbles: players[id].successfulDribbles+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Unsuccessful dribbles') setPlayers([
            ...players.slice(0, id),
            {...players[id], unsuccessfulDribbles: players[id].unsuccessfulDribbles+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Fouls') setPlayers([
            ...players.slice(0, id),
            {...players[id], fouls: players[id].fouls+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Shots on target') setPlayers([
            ...players.slice(0, id),
            {...players[id], shotsOnTarget: players[id].shotsOnTarget+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Shots off target') setPlayers([
            ...players.slice(0, id),
            {...players[id], shotsOffTarget: players[id].shotsOffTarget+1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Lost balls') setPlayers([
            ...players.slice(0, id),
            {...players[id], lostBalls: players[id].lostBalls+1},
            ...players.slice(id + 1),
        ]);
        // else  players[id].minutesPlayed;
        
    }

    const decrementPlayerStat = (id, stat) => {
        if (stat === "Goals") setPlayers([
            ...players.slice(0, id),
            {...players[id], goals: players[id].goals-1},
            ...players.slice(id + 1),
        ])
        else if (stat === 'Assists') setPlayers([
            ...players.slice(0, id),
            {...players[id], assists: players[id].assists-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Passes') setPlayers([
            ...players.slice(0, id),
            {...players[id], passes: players[id].passes-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Key Passes') setPlayers([
            ...players.slice(0, id),
            {...players[id], keyPasses: players[id].keyPasses-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Tackles') setPlayers([
            ...players.slice(0, id),
            {...players[id], tackles: players[id].tackles-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Successful dribbles') setPlayers([
            ...players.slice(0, id),
            {...players[id], successfulDribbles: players[id].successfulDribbles-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Unsuccessful dribbles') setPlayers([
            ...players.slice(0, id),
            {...players[id], unsuccessfulDribbles: players[id].unsuccessfulDribbles-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Fouls') setPlayers([
            ...players.slice(0, id),
            {...players[id], fouls: players[id].fouls-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Shots on target') setPlayers([
            ...players.slice(0, id),
            {...players[id], shotsOnTarget: players[id].shotsOnTarget-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Shots off target') setPlayers([
            ...players.slice(0, id),
            {...players[id], shotsOffTarget: players[id].shotsOffTarget-1},
            ...players.slice(id + 1),
        ]);
        else if (stat === 'Lost balls') setPlayers([
            ...players.slice(0, id),
            {...players[id], lostBalls: players[id].lostBalls-1},
            ...players.slice(id + 1),
        ]);
        // else  players[id].minutesPlayed;
        
    }

    const getStatValue = (id, stat) => {
        if (stat === 'Goals') return players[id].goals;
        else if (stat === 'Assists') return players[id].assists;
        else if (stat === 'Passes') return players[id].passes;
        else if (stat === 'Key Passes') return players[id].keyPasses;
        else if (stat === 'Tackles') return players[id].tackles;
        else if (stat === 'Successful dribbles') return players[id].successfulDribbles;
        else if (stat === 'Unsuccessful dribbles') return players[id].unsuccessfulDribbles;
        else if (stat === 'Fouls') return players[id].fouls;
        else if (stat === 'Shots on target') return players[id].shotsOnTarget;
        else if (stat === 'Shots off target') return players[id].shotsOffTarget;
        else if (stat === 'Lost balls') return players[id].lostBalls;
        else return players[id].minutesPlayed;
    }

    const renderSquad = () => {
        let start = 0;
        let end = formation[0];
        return (
            formation.map((row, i) => {
                if ( i>0) {
                    start += formation[i-1];
                    end += row;
                }
                return (
                    <TeamRow>
                        {
                            players.slice(start, end).map((p, id) => {
                                return <Player setPlayer={setPlayer} id={start+id} margin={'7px 16px 7px 16px'} name={p.name} num={p.shirtNumber} />
                            })
                        }
                    </TeamRow>
                )
            })
        );
    }


    return (
        <Container>
            <div>
                <> buttons </>
                <div style={{display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}}>{renderSquad()}</div>
            </div>
            <StatsContainer> 
                <h1 style={{color: 'white'}}>Current Player</h1>
                <Player id={selectedPlayer} margin={'32px'} name={players[selectedPlayer].name} num={players[selectedPlayer].shirtNumber} />
    
                {                
                    filtered.map((stat, id) => {
                        return(
                            <StatContainer bg={id % 2 === 0 ? '#9ab97d' : '#dbdbdb'}>
                                <p style={{fontWeight: 'bold', marginLeft: '7px'}}>{stat[0]}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '7px', width: '120px'}}>
                                    <NumberButton 
                                        onClick={() => incrementPlayerStat(selectedPlayer, stat[0])}
                                        bg={id % 2 === 0 ? '#dbdbdb' : 'black'}
                                        color={id % 2 === 1 ? '#dbdbdb' : 'black'}>
                                    +</NumberButton>
                                    <p style={{fontWeight: 'bolder'}}>{getStatValue(selectedPlayer, stat[0])}</p>
                                    <NumberButton 
                                        onClick={() => decrementPlayerStat(selectedPlayer, stat[0])}
                                        bg={id % 2 === 0 ? '#dbdbdb' : 'black'}
                                        color={id % 2 === 1 ? '#dbdbdb' : 'black'}>-</NumberButton>
                                </div>
                            </StatContainer>
                        );
                    })
                }
            </StatsContainer>
        </Container>
    );
}

export default NewMatch;
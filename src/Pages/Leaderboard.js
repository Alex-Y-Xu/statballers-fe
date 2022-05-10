import React, {useState} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #9ab97d;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeamNav = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    // margin: 5px;
`;

const TeamNavButton = styled.button`
    height: 50px;
    width: 200px;
    background-color: #7632ef;
    font-size: 1.2rem;
    border-radius: 6px;
    border-style: none;
    color: white;
    cursor: pointer;
`;

const LeaderboardRow = styled.div`
    width: 97%;
    display: grid;
    grid-template-columns: repeat(6, 1fr) 1.6fr 1.5fr 1fr 1.2fr 1.2fr 1.2fr 1fr 1.1fr 1fr
`;

const GoalKeepersRow = styled.div`
    width: 97%;
    display: grid;
    grid-template-columns: repeat(9, 1fr) 1.3fr 1.3fr 1fr 1.2fr 1.2fr;
`;

const RowEntryContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ebebeb;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    padding: 5px 0;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
`;

const EditContainer = styled.div`
    width: 100%;
    background-color: #ebebeb;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
`;

const colLabels = [
    ['Name'],
    ['Goals', '(18 points)'],
    ['Assists', '(9 points)'],
    ['Passes','(2 points)'],
    ['Key Passes', '(1 point)'],
    ['Tackles', '(2 points)'],
    ['Successful dribbles', '(1 point)'],
    ['Unsuccessful dribbles', '(-5 points)'],
    ['Fouls' ,'(-2 points)'],
    ['Shots on target', '(2 points)'],
    ['Shots off target', '(-1 point)'],
    ['Lost balls', '(-1 points)'],
    ['Points'],
    ['Mintes played'],
    ['Points per minute']
]

const gkLabel = [
    ["Name"],
    ["Saves", "(4 Points)"],
    ["Conceded", "(-9 Points)"],
    ["Shots Faced", "(1 Point)"],
    ["Save %"],
    ["Clean Sheets", "(15 Points)"],
    ["1v1s Won", "(2 Points)"],
    ["1v1s Lost", "(-1 Point)"],
    ["Penalty Saves", "(12 Points)"],
    ["Penalty Concedes", "(-2 Points)"],
    ["Unforced Errors", "(-1 Points)"],
    ["Points"],
    ["Minutes Played"],
    ["Points Per Minute"]
]

const LeaderboardLabel = styled.p`
    font-size: 25px;
`;

const players = [
    {
        name: 'Sheikh',
        shirtNumber: 3,
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
    }
];

const goalkeepers = [
    {
        name: 'Ramsdale',
        saves: 14,
        conceded: 3,
        shotsFaced: 21,
        //save %
        cleanSheets: 6,
        oneVsOneWon: 2,
        oneVsOneLost: 2,
        penSaved: 0,
        penConceded: 2,
        unforcedErrors: 0,
        //points
        minutesPlayed: 178
        //points per minute
    },
    {
        name: 'Ronaldo',
        saves: 1,
        conceded: 0,
        shotsFaced: 2,
        //save %
        cleanSheets: 0,
        oneVsOneWon: 0,
        oneVsOneLost: 0,
        penSaved: 0,
        penConceded: 0,
        unforcedErrors: 0,
        //points
        minutesPlayed: 2
        //points per minute
    }
]

const changePlayerStat = (id, stat, e) => {
    if (e.target.value === '') return;
    switch(stat) {
        case 'goals':
          players[id].goals = e.target.value;
          break;
        case 'assists':
            players[id].assists = e.target.value;
          break;
        case 'passes':
            players[id].passes = e.target.value;
          break;
        case 'keyPasses':
            players[id].keyPasses = e.target.value;
          break;
        case 'tackles':
            players[id].tackles = e.target.value;
          break;
        case 'successfulDribbles':
            players[id].successfulDribbles = e.target.value;
          break;
        case 'unsuccessfulDribbles':
            players[id].unsuccessfulDribbles = e.target.value;
          break;
        case 'fouls':
            players[id].fouls = e.target.value;
          break;
        case 'shotsOnTarget':
            players[id].shotsOnTarget = e.target.value;
          break;
        case 'shotsOffTarget':
            players[id].shotsOffTarget = e.target.value;
          break;
        case 'lostBalls':
            players[id].lostBalls = e.target.value;
          break;
        case 'saves':
            goalkeepers[id].saves = e.target.value;
          break;
        case 'conceded':
            goalkeepers[id].conceded = e.target.value;
          break;
        case 'shotsFaced':
            goalkeepers[id].shotsFaced = e.target.value;
          break;
        case 'cleanSheets':
            goalkeepers[id].cleanSheets = e.target.value;
          break;
        case 'oneVsOneWon':
            goalkeepers[id].oneVsOneWon = e.target.value;
          break;
        case 'oneVsOneLost':
            goalkeepers[id].oneVsOneLost = e.target.value;
          break;
        case 'penSaved':
            goalkeepers[id].penSaved = e.target.value;
          break;
        case 'penConceded':
            goalkeepers[id].penConceded = e.target.value;
          break;
          case 'unforcedErrors':
            goalkeepers[id].unforcedErrors = e.target.value;
          break;
          case 'mins':
            goalkeepers[id].minutesPlayed = e.target.value;
          break;
        // const {name,saves,conceded,shotsFaced,cleanSheets,oneVsOneWon,oneVsOneLost,penSaved,penConceded,unforcedErrors,minutesPlayed} = gk;
        default:
            players[id].minutesPlayed = e.target.value;
    }
}

function Leaderboard() {
    const [edit, toggleEdit] = useState(false);
    const location = useLocation();

    return (
    <Container>
        <TeamNav>
        <Link to={{
            pathname: "/",
        }}>
            <TeamNavButton>Back to teams</TeamNavButton>
        </Link>
            <h1>Leaderboard - {location.state.name}</h1>

            <TeamNavButton onClick={() => toggleEdit(!edit)}>{ edit ? 'Save' : 'Edit Stats'}</TeamNavButton>
        </TeamNav>


        <LeaderboardLabel>Outfield Players</LeaderboardLabel>
        
        <LeaderboardRow>                
            {
                colLabels.map(label => {
                    return (
                        <RowEntryContainer style={{backgroundColor: '#c5c5c4', border: '2px solid black'}}>
                            <p>
                                {label[0]} <br/>
                                {label.length > 1 && label[1]}
                            </p>
                        </RowEntryContainer>
                    );
                })
            }
        </LeaderboardRow>
        {
            players.map((player, id) => {
                const {name, goals, assists, passes, keyPasses, tackles, successfulDribbles, unsuccessfulDribbles, fouls, shotsOnTarget, shotsOffTarget, lostBalls , minutesPlayed} = player;
                return (
                    <LeaderboardRow>
                        <RowEntryContainer>{name}</RowEntryContainer>
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={goals} onChange={e => changePlayerStat(id, 'goals', e)} /></EditContainer> : <RowEntryContainer>{goals}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={assists} onChange={e => changePlayerStat(id, 'assists', e)} /></EditContainer> : <RowEntryContainer>{assists}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={passes} onChange={e => changePlayerStat(id, 'passes', e)} /></EditContainer> : <RowEntryContainer>{passes}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={keyPasses} onChange={e => changePlayerStat(id, 'keyPasses', e)} /></EditContainer> : <RowEntryContainer>{keyPasses}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={tackles} onChange={e => changePlayerStat(id, 'tackles', e)} /></EditContainer> : <RowEntryContainer>{tackles}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={successfulDribbles} onChange={e => changePlayerStat(id, 'successfulDribbles', e)} /></EditContainer> : <RowEntryContainer>{successfulDribbles}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={unsuccessfulDribbles} onChange={e => changePlayerStat(id, 'unsuccessfulDribbles', e)} /></EditContainer> : <RowEntryContainer>{unsuccessfulDribbles}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={fouls} onChange={e => changePlayerStat(id, 'fouls', e)} /></EditContainer> : <RowEntryContainer>{fouls}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={shotsOnTarget} onChange={e => changePlayerStat(id, 'shotsOnTarget', e)} /></EditContainer> : <RowEntryContainer>{shotsOnTarget}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={shotsOffTarget} onChange={e => changePlayerStat(id, 'shotsOffTarget', e)} /></EditContainer> : <RowEntryContainer>{shotsOffTarget}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={lostBalls} onChange={e => changePlayerStat(id, 'lostBalls', e)} /></EditContainer> : <RowEntryContainer>{lostBalls}</RowEntryContainer>}
                        <RowEntryContainer>{(goals *18) + (assists * 9) + (passes*2) + (keyPasses*1) + (tackles*2) + (successfulDribbles*1) + (unsuccessfulDribbles*-5) + (fouls *-2) + (shotsOnTarget * 2) + (shotsOffTarget*-1) + (lostBalls*-1)}</RowEntryContainer>
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={minutesPlayed}  onChange={e => changePlayerStat(id, '', e)} /></EditContainer> : <RowEntryContainer>{minutesPlayed}</RowEntryContainer>}
                        <RowEntryContainer>{minutesPlayed === 0 ? '0' : (((goals *18) + (assists * 9) + (passes*2) + (keyPasses*1) + (tackles*2) + (successfulDribbles*1) + (unsuccessfulDribbles*-5) + (fouls *-2) + (shotsOnTarget * 2) + (shotsOffTarget*-1) + (lostBalls*-1)) / minutesPlayed).toFixed(2)}</RowEntryContainer>
                    </LeaderboardRow>
                );
            })
        }
        
        <LeaderboardLabel>Goalkeepers</LeaderboardLabel>
        <GoalKeepersRow>
            {
                gkLabel.map(label => {
                    return (
                        <RowEntryContainer style={{backgroundColor: '#c5c5c4', border: '2px solid black'}}>
                            <p>
                                {label[0]} <br/>
                                {label.length > 1 && label[1]}
                            </p>
                        </RowEntryContainer>
                    );
                })
            }
        </GoalKeepersRow>
        {
            goalkeepers.map((gk, id) => {
                const {name,saves,conceded,shotsFaced,cleanSheets,oneVsOneWon,oneVsOneLost,penSaved,penConceded,unforcedErrors,minutesPlayed} = gk;
                return (
                    <GoalKeepersRow>
                        <RowEntryContainer>{name}</RowEntryContainer>
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={saves} onChange={e => changePlayerStat(id, 'saves', e)} /></EditContainer> : <RowEntryContainer>{saves}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={conceded} onChange={e => changePlayerStat(id, 'conceded', e)} /></EditContainer> : <RowEntryContainer>{conceded}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={shotsFaced} onChange={e => changePlayerStat(id, 'shotsFaced', e)} /></EditContainer> : <RowEntryContainer>{shotsFaced}</RowEntryContainer>}
                        <RowEntryContainer>{(saves/shotsFaced*100).toFixed(0)}</RowEntryContainer>
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={cleanSheets} onChange={e => changePlayerStat(id, 'cleanSheets', e)} /></EditContainer> : <RowEntryContainer>{cleanSheets}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={oneVsOneWon} onChange={e => changePlayerStat(id, 'oneVsOneWon', e)} /></EditContainer> : <RowEntryContainer>{oneVsOneWon}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={oneVsOneLost} onChange={e => changePlayerStat(id, 'oneVsOneLost', e)} /></EditContainer> : <RowEntryContainer>{oneVsOneLost}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={penSaved} onChange={e => changePlayerStat(id, 'penSaved', e)} /></EditContainer> : <RowEntryContainer>{penSaved}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={penConceded} onChange={e => changePlayerStat(id, 'penConceded', e)} /></EditContainer> : <RowEntryContainer>{penConceded}</RowEntryContainer>}
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={unforcedErrors} onChange={e => changePlayerStat(id, 'unforcedErrors', e)} /></EditContainer> : <RowEntryContainer>{unforcedErrors}</RowEntryContainer>}
                        <RowEntryContainer>{(saves *4) + (conceded * -9) + (shotsFaced) + (cleanSheets*15) + (oneVsOneWon*2) + (oneVsOneLost*-1) + (penSaved*12) + (penConceded *-2) + (unforcedErrors * -1)}</RowEntryContainer>
                        {edit ? <EditContainer><input style={{width: '50px'}} type="number" defaultValue={minutesPlayed}  onChange={e => changePlayerStat(id, 'mins', e)} /></EditContainer> : <RowEntryContainer>{minutesPlayed}</RowEntryContainer>}
                        <RowEntryContainer>{minutesPlayed === 0 ? '0' : (((saves *4) + (conceded * -9) + (shotsFaced) + (cleanSheets*15) + (oneVsOneWon*2) + (oneVsOneLost*-1) + (penSaved*12) + (penConceded *-2) + (unforcedErrors * -1)) / minutesPlayed).toFixed(2)}</RowEntryContainer>
                    </GoalKeepersRow>
                );
            })
        }

        <TeamNav>
            <TeamNavButton style={{width: '45%'}}>Add / Remove Player</TeamNavButton>
            <TeamNavButton style={{width: '20%'}}>View Individual Player Report</TeamNavButton>
            <select style={{padding: '5px', fontSize: '16px'}}>
                <option selected disabled>Select Player</option>
                {
                    players.map((player, id) => {return (<option>{player.name}</option>);})
                }
                {
                    goalkeepers.map((player, id) => {return (<option>{player.name}</option>);})
                }
            </select>
        </TeamNav>
    </Container>
  )
}

export {
    Leaderboard, colLabels, players
}
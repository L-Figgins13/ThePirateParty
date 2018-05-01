import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import {Flex, Box} from 'grid-styled';
import {Link} from 'react-router-dom';

const Bar = styled.div`
    border: 1px solid red;
`

const GameFinder = (props) =>  {
    return( 
            <Flex flexWrap='wrap'>
                <Box px={2} py={2} width={1}>
                    <Bar />
                    <H1>Games Lobby</H1>
                    <H2>Select A Game Room To Play!</H2>
                    <Link to= '/games/create'>Create A New Game </Link>
                    <GameTable games={props.games} joinGame={props.joinGame} />
                    
                </Box>

                <Box px={2} py={2} width={1/2}>
                <Bar />
                1/2
                </Box>
                <Box px={2} py={2} width={1/2}>
                <Bar />
                1/2
                </Box>
          </Flex>
    );
}


// GameListArea.GameRow = GameRow;
// GameListArea.GameTable = GameTable;
// i have no idea what you were doing here please explain how this syntax works
// i am not sayings its wrong i am literally asking where do you render it then?
// until i know i just did it hte way i knew how .
export default GameFinder;
import React                 from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { hot }               from 'react-hot-loader/root';
import styled                from 'styled-components/macro';

import DonutZero             from '@images/donut-zero.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    font-size: 24rem;
    text-shadow: 10px 10px 0px rgb(215, 154, 143);
`;

const Description = styled.h2`
    font-size: 4rem;
    color: white;
    text-shadow: 4px 4px 0px rgb(115, 67, 46);
`;

const Link = styled(ReactLink)`
    color: white;
    margin-top: 20px;
`;

const Page404 = (): JSX.Element => (
    <Container>
        <Title>
            4
            <img src={ DonutZero } />
            4
        </Title>
        <Description>Sorry :( page not found</Description>
        <Link to="/">Go to main page</Link>
    </Container>
);

export default hot(Page404);

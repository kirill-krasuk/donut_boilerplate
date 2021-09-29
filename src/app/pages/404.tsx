import { FC }                from 'react';
import { Link as ReactLink } from 'react-router-dom';
import styled                from 'styled-components/macro';

import DonutZero             from '@images/donut-zero.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    color: white;
    font-size: 24rem;
    text-shadow: 10px 10px 0px rgb(215, 154, 143);
`;

const Description = styled.h2`
    color: white;
    font-size: 4rem;
    text-shadow: 4px 4px 0px rgb(115, 67, 46);
`;

const Link = styled(ReactLink)`
    margin-top: 20px;
    color: white;
`;

const Page404: FC = () => (
    <Container>
        <Title>
            4
            <img src={ DonutZero } alt="Zero" />
            4
        </Title>
        <Description>Sorry :( page not found</Description>
        <Link to="/">Go to main page</Link>
    </Container>
);

export default Page404;

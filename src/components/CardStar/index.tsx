import React from 'react';
import { FiGitBranch, FiStar } from 'react-icons/fi';
import { IStarProps } from '../../TS/Interfaces/IStarProps';
import {
    Container,
    Name,
    Description,
    StatusContainer,
    Status,
    ContentContainer,
} from './styles';



const CardStar: React.FC<IStarProps> = ({
    name,
    description,
    forks_count,
    stargazers_count,
    html_url,
}) => {
 
    return (
        <Container href={html_url} target="_blank" >

            <ContentContainer>
                <Name>{name}</Name>
                <Description>{description}</Description>
                {forks_count && stargazers_count ? (
                    <StatusContainer>
                        <Status>
                            <FiGitBranch size={16} />
                            {forks_count}
                        </Status>
                        <Status>
                            <FiStar size={16} />
                            {stargazers_count}
                        </Status>
                    </StatusContainer>
                ) : <> </>}
            </ContentContainer>

        </Container>
    );
};

export default CardStar;
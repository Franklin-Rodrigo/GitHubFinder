import React from 'react';
import {
  FiArchive,
  FiUsers,
  FiPlusCircle,
  FiStar,
  FiArrowRight,
} from 'react-icons/fi';
import { IBioProps } from '../../TS/Interfaces/IBioProps';
import {
  SectionInfoContainer,
  UserImage,
  UserInfoContainer,
  UserInfoHeaderContainer,
  UserInfo,
  Nickname,
  LinkContainer,
  Username,
  Bio,
  StatusContainer,
  Status,
} from './styles';


const CardBio: React.FC<IBioProps> = ({
  image,
  name = '-',
  bio = '-',
  amount_repositories = 0,
  amount_followers = 0,
  amount_following = 0,
  amount_stars = 0,
  html_url,
  login,
}) => {

  return (

    <SectionInfoContainer>
      <UserImage src={image} />
      <UserInfoContainer>
        <UserInfoHeaderContainer>
          <UserInfo>
            <Username data-testid="username">{name}</Username>
            <Nickname>@{login}</Nickname>
          </UserInfo>
          <LinkContainer href={html_url} target="_blank">
            Go
            <FiArrowRight size={18} />
          </LinkContainer>
        </UserInfoHeaderContainer>
        <Bio>{bio}</Bio>
        <StatusContainer>
          <Status>
            <FiArchive size={16} />
            <span>{amount_repositories}</span>
          </Status>
          <Status>
            <FiUsers size={16} />
            <span>{amount_followers}</span>
          </Status>
          <Status>
            <FiPlusCircle size={16} />
            <span>{amount_following}</span>
          </Status>
          <Status>
            <FiStar size={16} />
            <span>{amount_stars}</span>
          </Status>
        </StatusContainer>
      </UserInfoContainer>
    </SectionInfoContainer>

  );
};

export default CardBio;
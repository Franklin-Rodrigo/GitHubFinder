import styled from 'styled-components';

export const Container = styled.a`
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.4s;
  text-decoration: none;
  color: black;
  &:hover {
    transform: translateX(10px);
  }
  & + a {
    margin-top: 10px;
  }

`;

export const ContentContainer = styled.div`
  padding-right: 20px;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
  }
`;

export const Name = styled.h3`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 15px;
`;

export const StatusContainer = styled.div`
  display: flex;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  & + div {
    margin-left: 20px;
  }
`;

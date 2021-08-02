import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-Left: 10%;
  margin-Right: 10%;
  .GitHubButton{
      background-color: #ffa500;
      color: white;
      border: none;
      padding: 15px;
      border-radius: 10px;
      width: 140px;
      transition: all 0.2s;
      &:hover{
        background-color: #cc8502 ;
        cursor: pointer;
        transform: scale(1.1);
      }
  }
    
`;
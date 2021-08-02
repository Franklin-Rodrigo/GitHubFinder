import styled, { css } from 'styled-components';
interface FormProps {
  hasError: boolean;
}

// export const Title = styled.h1`
//   font-size: 48px;
//   color: #3a3a3a;
//   margin-top: 80px;
//   max-width: 450px;
//   line-height: 56px;
// `;

// export const Logo = styled.img``;
export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #ffa500;
      border: 1px solid #ffa500;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    min-width: 500px;
    flex: 1;
    height: 78px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 16px;
    border: 2px solid #fff;
    border-right: 0;
    ${(props) =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  input:focus{
      box-shadow: 0 0 0 0;
      outline:0;
  }
  button {
    width: 210px;
    height: 80px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #ffa500;
    color: #fff;
    font-weight: bold;
    transition: background 0.4s;
    &:hover {
      background-color: #cc8502 ;
        cursor: pointer;
        transform: scale(1.1);
    }
  }
  @media(max-width: 800px) {
    input {
    min-width: 50px;
    font-size: 12px;
   }
   button {
    width:60px;
   }
  }
`;

export const Empty = styled.h3`
  margin-bottom: 15px;
  color: 'red';
  margin-Left: 30px;
`;
export const CleanFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #d30404;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.4s;
  &:hover {
    filter: brightness(0.8);
  }
  svg { 
    font-size: 26px;
    color: #fff;
  }
  @media(max-width: 800px) {
    svg { 
    font-size: 16px;
 
  }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

interface SectionProps {
  width?: number;
  minWidth?: number;
  hasContent?: boolean;
}

export const Sections = styled.div<SectionProps>`
  margin-top: 40px;
  min-width: ${(props) => props.width}%;
  display: flex;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
  ${(props) =>
    props.hasContent
      ? css`
          justify-content: center;
          align-items: flex-start;
        `
      : css`
          align-items: center;
          justify-content: center;
        `}
`;

export const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${(props) => (props.hasContent ? 'baseline' : 'center')};
  min-width: ${(props) => props.minWidth}px;
  width: ${(props) => props.width}%;
  & + div {
    margin-left: 20px;
  }
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    min-width: 100px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-Left: 10%;
  margin-Right: 10%;

`;
// export const WithoutContentImg = styled.img`
//   margin-top: 50px;
//   width: 500px;
// `;


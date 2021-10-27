import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
    `
  };
  return acc;
}, {})

console.log(media.desktop) 
const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  ${media.desktop`width: 768px`};
  ${media.tablet`width: 100%`};
  }
`

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  };

  ${props =>
    props.inverted &&
    `
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `
  };

  & + button {
    margin-left: 1rem;
  }
`;


function tagged(...args) {
  console.log(args)
  return args[0][0] + args[1]['foo'] + args[0][1] + args[2]() + args[0][2]
}

const taggedString = tagged`hello ${{ foo: 'bar' }} ${() => 'world'}! ${1234}`;
// const untagged = `hello ${{foo: 'bar'}} ${()=>'world'}!`;
// console.log(untagged)
const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
      {/* <p style={{color:'white'}}>{untagged}</p> */}
      <p style={{ color: 'white' }}>{taggedString}</p>
    </Box>
  );
};

export default StyledComponent;
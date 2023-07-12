import { styled } from 'styled-components';

export const Container = styled.div`
  user-select: none;
  width: 260px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, .15);
  border-radius: 8px;

  h1 {
    text-align: center;
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 5px 0 10px;
  }
`;

export const MonthsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    margin: 10px;
    font-weight: 400;
    font-size: 20px;
  }


  svg {
    color: #1FA8C5;
    cursor: pointer;
  }
`;

export const DaysGrid = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  * {
    width: 38px;
    height: 38px;
    text-align: center;
  }
`;

export const Button = styled.button`
    border-radius: 50%;
    outline: none;
    background-color: ${({ selected }) => selected ? '#1FA8C5' : 'transparent'};
    color: ${({ selected, $dateIsGray }) => selected ? '#fff' : $dateIsGray ? '#ccc' : '#000'};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #1FA8C5;
      color: #fff;
    }
`;


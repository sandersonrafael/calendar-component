import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, DaysGrid, MonthsFlex } from './styles';
import getCalendar from '../../utils/getCalendar';
import monthsList from '../../utils/monthsList';
import daysList from '../../utils/daysList';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

export default function Calendar({ setReturn, style }) {
  const [relativeMonth, setRelativeMonth] = useState(0);
  const [whiteSpaces, setWhiteSpaces] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [dateButtons, setDateButtons] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const newCalendar = getCalendar(relativeMonth);
    setCalendar(newCalendar);

    const newWhiteSpaces = [];
    const newDateButtons = [];
    for (let i = 1; i <= newCalendar.currentMonthLength; i++) {
      if (i <= newCalendar.currentMonthFirstDay) newWhiteSpaces.push('');
      newDateButtons.push(i);
    }

    setWhiteSpaces(newWhiteSpaces);
    setDateButtons(newDateButtons);

    if (relativeMonth === 0) setSelectedDate(new Date().getDate());
    else setSelectedDate(null);
  }, [relativeMonth]);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setReturn([calendar.currentYear, calendar.currentMonth, date]);
  };

  const dateIsGray = (date) => {
    const now = new Date().getTime();
    const checkDate = new Date(
      calendar.currentYear,
      calendar.currentMonth,
      date
    ).getTime();

    return checkDate > now;
  };

  return (
    <Container style={style}>
      <h1>{calendar.currentYear}</h1>
      <hr />
      <MonthsFlex>
        <BsArrowLeftSquareFill onClick={() => setRelativeMonth((v) => v - 1)} />
        <h2>{monthsList[calendar.currentMonth]}</h2>
        <BsArrowRightSquareFill
          onClick={() => setRelativeMonth((v) => v + 1)}
        />
      </MonthsFlex>
      <hr />
      <DaysGrid>
        {daysList.map((dayName, key) => (
          <span key={key}>{dayName}</span>
        ))}
        {whiteSpaces.map((_white, key) => (
          <span key={key} />
        ))}
        {dateButtons.map((date, key) => (
          <Button
            type='button'
            key={key}
            onClick={() => handleSelectDate(date)}
            selected={selectedDate === date}
            $dateIsGray={dateIsGray(date)}
          >
            {date}
          </Button>
        ))}
      </DaysGrid>
    </Container>
  );
}

Calendar.propTypes = {
  setReturn: PropTypes.func,
  style: PropTypes.object,
};

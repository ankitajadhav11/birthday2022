import './App.css';
import Container from '@mui/material/Container';
import MonthBox from '../MonthBox/MonthBox';
import { useEffect, useState } from 'react';
import Lock from '../Lock/Lock';

function App() {
  const [currentTime, setCurrentTime] = useState();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    getCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentTime = async () => {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    const { datetime } = await res.json();
    setCurrentTime(datetime);
  }
  return (
    <Container maxWidth="sm" className="App">

      {!isUnlocked ?
        <Lock setIsUnlocked={setIsUnlocked} /> : ""
      }
      {currentTime && isUnlocked ?
        <div className='month-box-div'>
          <h1 className='title'>Happy Birthday Ankita 🥳</h1>
          <p className='title'> With love and patience, nothing is impossible.<br />We already have love ❤️ just need to practice some patience.</p>
          <MonthBox
            unlockTime="2022/10/06"
            currentTime={currentTime}
            subtitle="The birthday month 🎂"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2022/11/01"
            currentTime={currentTime}
            subtitle="It's getting cold 🥶"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2022/12/01"
            currentTime={currentTime}
            subtitle="Bye Bye 2020 👋"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/01/01"
            currentTime={currentTime}
            subtitle="Welcome to 2023 🙏"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/02/01"
            currentTime={currentTime}
            subtitle="Will you be my valentine ? ❤️"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/03/01"
            currentTime={currentTime}
            subtitle="Let's file those taxes 📑"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/04/01"
            currentTime={currentTime}
            subtitle="be fool of joy 😅"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/05/01"
            currentTime={currentTime}
            subtitle="Time for some ice cream 🍦"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/06/01"
            currentTime={currentTime}
            subtitle="Back to school 🚌"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/07/01"
            currentTime={currentTime}
            subtitle="Make it rain 🌧"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/08/01"
            currentTime={currentTime}
            subtitle="Be Independent 🇮🇳"
          >
          </MonthBox>
          <MonthBox
            unlockTime="2023/09/01"
            currentTime={currentTime}
            subtitle="End of 27th 💁‍♀️"
          >
          </MonthBox>
        </div> : ""
      }
    </Container>
  );
}
export default App;
import './MonthBox.css';
import { Accordion, AccordionDetails, AccordionSummary, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import ImageSlider from '../ImageSlider/ImageSlider';
import MessageBox from '../MessageBox/MessageBox'


function MonthBox({
    unlockTime,
    currentTime,
    subtitle
}) {
    const [isUnlocked, setIsUnlocked] = useState(true);
    const [daysRemaining, setDaysRemaining] = useState(null);
    const [hoursRemaining, setHoursRemaining] = useState(null);
    const [minuetsRemaining, setMinuetsRemaining] = useState(null);
    const [secondsRemaining, setSecondsRemaining] = useState(null);
    const [boxMonth, setBoxMonth] = useState("");
    useEffect(() => {
        const currentDateTime = new Date(currentTime);
        const unlockDateTime = new Date(unlockTime);
        setBoxMonth(unlockDateTime.toLocaleString('default', { month: 'long' }));
        let differenceSeconds = Math.floor((unlockDateTime.getTime() - currentDateTime.getTime()) / 1000);
        getRemainingTime(differenceSeconds);
        const interval = setInterval(() => {
            differenceSeconds--;
            getRemainingTime(differenceSeconds)
        }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRemainingTime = (differenceSeconds) => {
        if (differenceSeconds <= 0) {
            setDaysRemaining(0);
            setHoursRemaining(0);
            setMinuetsRemaining(0);
            setSecondsRemaining(0);
            setIsUnlocked(true);
            return;
        }
        setDaysRemaining(Math.floor(differenceSeconds / (60 * 60 * 24)));
        setHoursRemaining(Math.floor((differenceSeconds / (60 * 60)) % 24));
        setMinuetsRemaining(Math.floor((differenceSeconds / 60) % 60));
        setSecondsRemaining(Math.floor((differenceSeconds) % 60));
    }

    return (
        <Fade in={true}>
            <Accordion disabled={!isUnlocked} className="accordion">
                <AccordionSummary
                    expandIcon={isUnlocked ? <ExpandMoreIcon /> : <LockIcon />}
                >
                    <div className='accordion-title'>
                        <Typography>{boxMonth}</Typography>

                        <Typography variant="caption" className='timer'>
                            {
                                isUnlocked ? subtitle :
                                    daysRemaining > 0 ?
                                        `${daysRemaining} days remaining` : hoursRemaining ?
                                            `${hoursRemaining} hours ${minuetsRemaining} min ${secondsRemaining} sec remaining` :
                                            `${minuetsRemaining} min ${secondsRemaining} sec remaining`
                            }
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ImageSlider month={boxMonth} />
                    <MessageBox month={boxMonth} />
                </AccordionDetails>
            </Accordion>
            {/* <Accordion>
            
            </Accordion> */}
        </Fade>
    );
}

export default MonthBox;
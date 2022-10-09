import { Card, Typography } from '@mui/material'
import Carousel from 'better-react-carousel'
import data from './data'
import './ImageSlider.css'
function ImageSlider({ month }) {
    return (
        <Carousel cols={2} rows={1} gap={10} loop>
            {month && data[month] ? data[month].map((image, index) => {
                return <Carousel.Item key={month + index}>
                    <Card className='imageCard'>
                        {
                            image.isVideo ?
                                <video width="100%" height="300px" loop="true" autoplay="autoplay" muted>
                                    <source src={image.src} type="video/mp4"></source>
                                </video> :
                                <img width="100%" src={image.src} alt={image.date} />
                        }
                        {
                            image.date ?
                                <div className='infoDiv'>
                                    <Typography className='info'>
                                        🗓 {image.date}
                                    </Typography>
                                    <Typography className='info'>
                                        📌 {image.place}
                                    </Typography>
                                </div> : ""
                        }
                    </Card>
                </Carousel.Item>
            }) : null}
        </Carousel>
    )
}

export default ImageSlider;
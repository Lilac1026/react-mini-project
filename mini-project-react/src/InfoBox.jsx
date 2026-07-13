import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
    let init_img = "https://unsplash.com/photos/green-grass-field-near-lake-under-white-clouds-and-blue-sky-during-daytime-KWTkd7mHqKE"; 
    let HOT_URL = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1431036101494-66a36de47def?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div>
            <h1>Information of the City</h1>
                <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity>80?<ThunderstormIcon/>: info.temp>15? <SunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humidity: {info.humidity}&deg;C</div>
            <div>Min Temp: {info.tempMin}&deg;C</div>
            <div>Max Temp: {info.tempMax}&deg;C</div>
            <p>The weather can be described as {info.weather} and feel like {info.feelsLike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
        </div>
    )
};
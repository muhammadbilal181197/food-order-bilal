import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Food from '../../../assets/Body/Restaurant-Card/food-one.jpg'
import '../../../styles/Body/Restaurant-Card/Card.scss'


const MediaCard = (props) => {
  const {title, price, description} = props;
  return (
    <Card sx={{ maxWidth: 280 }} className="card-wrapper">
      <CardMedia
        sx={{ height: 140 }}
        image={Food}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='card-content'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='card-footer'>
        <Button size="small" className='price'>Rs {price}</Button>
        <Button size="small" className='bucket'>Add to Bucket</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardComponentProps = {
  onClick?: () => void;
  name: string;
};

export default function CardComponent({ name, onClick }: CardComponentProps) {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

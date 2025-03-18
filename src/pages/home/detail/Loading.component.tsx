import { Box, Skeleton } from '@mui/material';

export function LoadingComponent() {
  return (
    <div>
      <Skeleton variant="rectangular" width={'100%'} height={240} />
      <Box pb={4}></Box>
      <Skeleton variant="rectangular" width={'100%'} height={50} />
      <Box pb={1}></Box>
      <Skeleton variant="rectangular" width={'100%'} height={50} />
    </div>
  );
}

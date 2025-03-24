import { Box, CardMedia, Dialog, DialogContent, DialogTitle, Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDetail } from './hooks';
import { LoadingComponent } from './Loading.component';
import { People } from '@/@types/swapi';

type DetailPageProps = {
  people?: People;
  handleClose: () => void;
};

const DetailPage = ({ handleClose, people }: DetailPageProps) => {
  const { dataImage, dataHomeworld, loading, error } = useDetail(people?.name, people?.homeworld);

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>{people?.name}</DialogTitle>

      <DialogContent dividers>
        {loading && <LoadingComponent />}

        {error || (!people && <div>We couldn't load</div>)}

        {!loading && !error && (
          <>
            <Box pb={2} minHeight={150}>
              {dataImage && (
                <CardMedia
                  component="img"
                  height={'100%'}
                  image={dataImage.image}
                  alt={dataImage.description}
                />
              )}
              {!dataImage && <Skeleton variant="rectangular" width={'100%'} height={240} />}
            </Box>

            {people && (
              <Box pb={2}>
                <Typography variant="h6">Details:</Typography>

                <ul>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Height: </strong>
                      {`${Number(people.height) / 100}m`}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Mass: </strong>
                      {people.mass}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Gender: </strong>
                      {people.gender}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Birth year: </strong>
                      {people.birth_year}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Number of films the character appears in: </strong>
                      {people.films.length}
                    </Typography>
                  </li>
                </ul>
              </Box>
            )}

            {dataHomeworld && (
              <Box>
                <Typography variant="h6">Homeworld:</Typography>

                <ul>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Name: </strong>
                      {dataHomeworld.name}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Terrain: </strong>
                      {dataHomeworld.terrain}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Climate: </strong>
                      {dataHomeworld.climate}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="div">
                      <strong>Population: </strong>
                      {dataHomeworld.population}
                    </Typography>
                  </li>
                </ul>
              </Box>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailPage;

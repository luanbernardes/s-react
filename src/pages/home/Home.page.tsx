import React, { useState } from 'react';
import { usePeople } from './hooks';
import CardComponent from './Card.component';
import { LoadingComponent } from './Loading.component';
import { FilterComponent } from './filter/Filter.component';
import { CheckBox, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid2,
  IconButton,
  InputBase,
  Pagination,
  Paper
} from '@mui/material';
import DetailPage from './detail/Detail.page';
import { People } from '@/types/swapi';

const HomePage = () => {
  const [filterPagination, setFilterPagination] = useState(1);
  const [filterCharacterName, setFilterCharacterName] = useState('');
  const [filterHomeworlds, setFilterHomeworlds] = useState<number[]>([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [peopleSelected, setPeopleSelected] = useState<People>();
  const { data, pageSize, loading, error } = usePeople(
    filterPagination,
    filterCharacterName,
    filterHomeworlds
  );
  const [timer, setTimer] = useState<number | null>(null);

  const handleClickOpen = (people: People) => {
    setPeopleSelected(people);
    setOpenDetails(true);
  };
  const handleClose = () => {
    setOpenDetails(false);
  };

  function paginationChange(event: React.ChangeEvent<unknown>, value: number) {
    setFilterPagination(value);
  }
  function findCharacter() {
    setFilterPagination(1);
    setFilterCharacterName(filterCharacterName);
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // debounce
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      window.setTimeout(() => {
        setFilterPagination(1);
        setFilterCharacterName(e.target.value);
      }, 500)
    );
  }

  function onChangeFilter(filters: number[]) {
    setFilterHomeworlds(filters);
  }

  return (
    <Container>
      <Box pt={2} pb={4}>
        <FormControl onSubmit={findCharacter}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              name={'filterCharacterName'}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search a Star Wars Character"
              inputProps={{ 'aria-label': 'search a Start Wars Character' }}
              onChange={inputChange}
            />
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={findCharacter}
            >
              <Search />
            </IconButton>
          </Paper>

          <FilterComponent onChange={onChangeFilter} />
        </FormControl>
      </Box>

      <Box minHeight={500}>
        {loading && <LoadingComponent />}

        {error && <div>Error!</div>}

        {!loading && !error && data && (
          <Grid2 container spacing={2} pb={3}>
            {data.map((people) => (
              <Grid2 size={6} key={people.url}>
                <CardComponent name={people.name} onClick={() => handleClickOpen(people)} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>

      <Grid2 container justifyContent={'center'} pb={3}>
        <Pagination count={pageSize} color="primary" onChange={paginationChange} />
      </Grid2>

      {openDetails && <DetailPage people={peopleSelected} handleClose={handleClose} />}
    </Container>
  );
};

export default HomePage;

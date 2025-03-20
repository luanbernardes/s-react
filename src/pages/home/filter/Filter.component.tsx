import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  Grow,
  Paper,
  Popper,
  Stack
} from '@mui/material';
import { useGelAllFilters } from '@/pages/home/filter/hooks';

type DetailPageProps = {
  onChange: (filter: number[]) => void;
};

export const FilterComponent = ({ onChange }: DetailPageProps) => {
  const [open, setOpen] = useState(false);
  const [selectedHomeworlds, setSelectedHomeworlds] = useState<number[]>([]);
  const { dataHomeworlds } = useGelAllFilters();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const prevOpen = useRef(open);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedHomeworlds((prevSelected) =>
      checked
        ? [...prevSelected, parseInt(name)]
        : prevSelected.filter((item) => item !== parseInt(name))
    );
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    onChange(selectedHomeworlds);
  }, [onChange, selectedHomeworlds]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Homeworlds
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper width="100%">
                <FormGroup>
                  <Grid2 container spacing={1} py={1} px={2} width={'100vw'}>
                    {dataHomeworlds?.map((homeworld) => (
                      <Grid2 size={3} key={homeworld.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={String(homeworld.id)}
                              checked={selectedHomeworlds.includes(homeworld.id)}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label={homeworld.name}
                        />
                      </Grid2>
                    ))}
                  </Grid2>
                </FormGroup>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

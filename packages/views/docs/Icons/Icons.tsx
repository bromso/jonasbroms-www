/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Fixed } from 'layouts';
import { Container } from 'components';

const Icons = (): JSX.Element => {
  return (
    <Fixed>
      <Container>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Icons
          </Typography>
          <Typography gutterBottom>
            There two types of icons used in the theme:
          </Typography>
          <ul>
            <Box component={'li'} marginY={1 / 2} marginX={0}>
              <Typography>
                Hero Icons: Please{' '}
                <Link href={'https://heroicons.com/'} target={'_blank'}>
                  visit here
                </Link>
              </Typography>
            </Box>
            <Box component={'li'} marginY={1 / 2} marginX={0}>
              <Typography>
                MUI Icons: Please{' '}
                <Link
                  href={'https://mui.com/components/material-icons/'}
                  target={'_blank'}
                >
                  visit here
                </Link>
              </Typography>
            </Box>
          </ul>
        </Box>
      </Container>
    </Fixed>
  );
};

export default Icons;

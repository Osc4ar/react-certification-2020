import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Flex, Heading, IconButton, Button } from '@chakra-ui/core';

import { useAuth } from '../../providers/Auth';
import SearchVideo from '../SearchVideo/SearchVideo.component';

function Nav() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function authenticate(event) {
    event.preventDefault();
    history.push('/login');
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Heading as="h1" size="lg" letterSpacing="-.1rem">
            WizeTube
          </Heading>
        </Link>
      </Flex>
      <Box
        display={{ md: 'block' }}
        width={{ md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <SearchVideo />
      </Box>
      <Box display={{ md: 'flex' }} mt={{ base: 4, md: 0 }}>
        <Link to="/favorites">
          <IconButton
            aria-label="Favorites"
            icon="star"
            mt={{ base: 4, md: 0 }}
            mr={6}
            display={authenticated ? 'block' : 'none'}
            bg="transparent"
          />
        </Link>
        <Button
          bg="transparent"
          border="1px"
          w="6rem"
          onClick={authenticated ? deAuthenticate : authenticate}
        >
          {authenticated ? 'Log Out' : 'Log In'}
        </Button>
      </Box>
    </Flex>
  );
}

export default Nav;

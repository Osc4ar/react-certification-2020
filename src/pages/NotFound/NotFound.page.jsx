import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const styledLink = styled(Link)`
  & {
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 0.2rem 0.3rem;
  }

  &::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`;

function NotFoundPage() {
  return (
    <section>
      <styledLink to="/">home</styledLink>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;

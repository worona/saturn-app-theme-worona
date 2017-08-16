/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Head from '@worona/next/head';
import dynamic from '@worona/next/dynamic';
import normalize from '../normalize.css';
import { selectorCreators } from '../../deps';
import { blackOrWhite } from '../../libs';
import Header from '../Header';
import Menu from '../Menu';
import Share from '../Share';
// import Cookies from '../Cookies';

const DynamicHome = dynamic(import('../Home'));

const Theme = ({ mainColor }) => {
  const theme = {
    color: blackOrWhite(mainColor),
    bgColor: mainColor,
    titleSize: '56px',
    navbarSize: '30px',
    logoSize: '1.3em',
    menuPaddingLeft: '20px',
    shadowColor: '#999',
    postListLight: '#FFF',
    postListGrey: '#AAA',
    postListDark: '#333',
    shareSize: '44px',
    postLight: '#FFF',
    postGrey: '#AAA',
    postDark: '#333',
    shareBarHeight: '56px',
    shareBarButtonSize: '40px',
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: normalize }} />
        </Head>
        <Header />
        <Menu />
        <DynamicHome />
        <Share />
        {/* <Cookies /> */}
      </Container>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  mainColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  mainColor: selectorCreators.getSetting('theme', 'mainColor')(state),
});

export default connect(mapStateToProps)(Theme);

const Container = styled.div`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  *:focus,
  *:hover {
    opacity: 1;
  }
`;

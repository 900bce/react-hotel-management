import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { RoomProvider } from './contexts/RoomContext';
import './App.css';

function HotelManagement() {
  return (
    <RoomProvider>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </RoomProvider>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0 2rem;
  color: #333;

  .header {
    font-size: 3rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(220, 220, 220);
  }
`;

export default HotelManagement;

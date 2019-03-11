import React from 'react';
import PropTypes from 'prop-types';
import { ZemoConsumer } from '../context';
import './styles.css';

const Room = ({ room }) => (
  <ZemoConsumer>
    {data => (
      <div className={`room ${room.cameras.indexOf(data.foundCamera) > -1 && 'here'}`}>
        {room.name}
      </div>
    )}
  </ZemoConsumer>
);

Room.propTypes = {
  room: PropTypes.object.isRequired,
};

export default Room;

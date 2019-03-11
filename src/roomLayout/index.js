import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Room from './room';
import { ZemoConsumer } from '../context';

const Area = ({ rooms }) => <div className="area">{rooms.map(room => <Room key={room.name} room={room} />)}</div>;

export default () => (
  <ZemoConsumer>
    {data => (
      <React.Fragment>
        {data.error && <h5>Not found in any location.</h5>}
        <div className="layout">
          {data.roomLayout.map(x => <Area key={x.id} rooms={x.rooms} />)}
        </div>
      </React.Fragment>
    )}
  </ZemoConsumer>

);


Area.propTypes = {
  rooms: PropTypes.array.isRequired,
};

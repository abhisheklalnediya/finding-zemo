import React from 'react';
import PropTypes from 'prop-types';
// import { setUser } from './actions';

const ZemoContext = React.createContext();

class ZemoProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      foundCamera: 'C2',
      roomLayout: [
        {
          id: 1,
          rooms: [
            {
              name: 'Room 1',
              cameras: ['C1'],
            },
            {
              name: 'Room 2',
              cameras: ['C2'],
            },
            {
              name: 'Room 3',
              cameras: ['C3'],
            }],
        },
        {
          id: 2,
          rooms: [
            {
              name: 'Lobby',
              cameras: ['C4'],
            },
            {
              name: 'Game Room',
              cameras: ['C5'],

            }],
        },
        {
          id: 3,
          rooms: [
            {
              name: 'Conference Hall',
              cameras: ['C6'],
            },
            {
              name: 'Pantry',
              cameras: ['C7', 'C8'],
            },
          ],
        },
      ],
    };
  }

  render() {
    const { children } = this.props;
    return (
      <ZemoContext.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </ZemoContext.Provider>
    );
  }
}
const ZemoConsumer = ZemoContext.Consumer;

export { ZemoProvider, ZemoConsumer };

ZemoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

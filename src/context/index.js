import React from 'react';
import PropTypes from 'prop-types';
import { getUsers, getLocation } from './actions';

const ZemoContext = React.createContext();

const users = [
  // { text: 'Abhishek', id: 1 },
  // { text: 'Dharani', id: 2 },
  // { text: 'Poonam', id: 3 },
  // { text: 'Salini', id: 4 },
];
class ZemoProvider extends React.Component {
  constructor() {
    super();
    this.state = {

      users,
      // foundCamera: 'C2',
      roomLayout: [
        {
          id: 1,
          rooms: [
            {
              name: 'Odissi',
              cameras: ['C1'],
            },
            {
              name: 'Bharathanatyam',
              cameras: ['C2'],
            },
            {
              name: 'Garba',
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
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    getUsers().then(({ data }) => {
      // console.log(data);
      this.setState({
        users: data.map(d => ({ text: d.userName, id: d.userId })),
      });
    });
  }

  getLocation(i) {
    this.setState({
      user: i,
      error: false,
    });
    getLocation(i).then(({ data }) => this.setState({
      foundCamera: `C${data}`,
    }), () => {
      this.setState({
        foundCamera: null,
        error: true,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ZemoContext.Provider
        value={{
          ...this.state,
          getLocation: this.getLocation,
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

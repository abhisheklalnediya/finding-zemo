import React from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import './styles.css';
import { ZemoConsumer } from '../context';

export default () => (
  <ZemoConsumer>
    {data => (
      <div className="selectContainer">
        <Select2
          data={data.users}
          options={{ placeholder: 'Search by user' }}
          className="zestSelect"
          style={{ width: '100%' }}
          value={data.user}
          onSelect={e => data.getLocation(e.target.value)}
        />
      </div>
    )}
  </ZemoConsumer>
);

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
          options={{ placeholder: 'search by tags' }}
          className="zestSelect"
          style={{ width: '100%' }}
          onSelect={e => console.log(e.target.value)}
        />
      </div>
    )}
  </ZemoConsumer>
);

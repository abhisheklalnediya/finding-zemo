import React from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

export default () => (
  <div>
    <Select2
      data={['bug', 'feature', 'documents', 'discussion']}
      options={
    {
      placeholder: 'search by tags',
    }
  }
    />
  </div>
);

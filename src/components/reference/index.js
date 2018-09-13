import React from 'react';

import LinkReference from 'root/components/link-reference';

import Typography from '@material-ui/core/Typography';

const Reference = ({list}) => (
  <React.Fragment>

    <Typography variant="display1" gutterBottom>
      References
    </Typography>

    <Typography component="ul" variant="body1" gutterBottom color="secondary">
      {list.map(ref => (
        <li key={ref}>
          <LinkReference title={ref}/>
        </li>
      ))}
    </Typography>

  </React.Fragment>
);

export default Reference;

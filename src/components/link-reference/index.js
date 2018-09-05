import React from 'react';

import Typography from '@material-ui/core/Typography';

import {
  Link,
} from './style';

const LinkReferences = ({to, title}) => (
  <Link href={to || title} target="_blank">
    <Typography variant="subheading" color="secondary">
      {title}
    </Typography>
  </Link>
);

export default LinkReferences;
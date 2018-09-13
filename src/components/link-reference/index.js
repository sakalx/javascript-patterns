import React from 'react';

import Typography from '@material-ui/core/Typography';

import {
  Link,
} from './style';

const LinkReferences = ({to, title, variant = "subheading", color = "secondary"}) => (
  <Link href={to || title} target="_blank">
    <Typography variant={variant} color={color} noWrap>
      {title}
    </Typography>
  </Link>
);

export default LinkReferences;
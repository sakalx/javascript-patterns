import React from 'react';

import Typography from '@material-ui/core/Typography';

import {
  Description,
} from './style';

const ScreenContent = ({
                         children,
                         description,
                         descriptionVariant,
                         header,
                         component,
                         title,
                         titleVariant,
                       }) => (
  <React.Fragment>

    <Typography
      variant={titleVariant || (header ? 'display2' : 'body2')}
      gutterBottom
    >
      {title}
    </Typography>

    <Description
      component={component}
      variant={descriptionVariant || (header ? 'headline' : 'body1')}
      gutterBottom
    >
      {description || children}
    </Description>
    {header && <br/>}
  </React.Fragment>
);

export default ScreenContent;
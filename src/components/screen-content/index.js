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
                         title,
                         titleVariant,
                       }) => (
  <React.Fragment>

    <Typography
      variant={titleVariant || (header ? 'display2' : 'title')}
      gutterBottom
    >
      {title}
    </Typography>

    <Description
      variant={descriptionVariant || (header ? 'headline' : 'subheading')}
      gutterBottom
    >
      {description || children}
    </Description>
    {header && <br/>}
  </React.Fragment>
);

export default ScreenContent;
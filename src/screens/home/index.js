import React from 'react';

import {logoIco} from 'root/components/icons';

import LinkReferences from 'root/components/link-reference';
import Reference from 'root/components/reference';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Wrap,
  LogoIcon,
} from './style';

const Home = () => (
  <React.Fragment>
    <Wrap>
      <LogoIcon viewBox="0 0 515 515">
        {logoIco}
      </LogoIcon>
      <Typography
        align="center"
        color="primary"
        gutterBottom
        variant="display2"
      >
        JavaScript PATTERNS Collection
      </Typography>
      <Typography
        align="center"
        color="primary"
        gutterBottom
        variant="headline"
      >
        100% free & taken from
        <LinkReferences
          color="primary"
          title="SHI CHUAN"
          to="https://twitter.com/shichuan"
          variant="headline"
        />
      </Typography>
      <Typography
        align="center"
        variant="subheading"
        paragraph
      >
        A JavaScript pattern and antipattern collection that covers function patterns, design patterns, general
        patterns, literals and constructor patterns, object creation patterns, code reuse patterns, ReactJs patterns
        coming soon.
      </Typography>
      <Button
        color="primary"
        href="https://github.com/shichuan/javascript-patterns"
        target="_blank"
        variant="outlined"
      >
        legacy source
      </Button>
    </Wrap>

    <Reference list={[
      'https://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145',
      'http://www.jspatterns.com/',
      'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      'http://eloquentjavascript.net/'
    ]}/>
  </React.Fragment>
);

export default Home;

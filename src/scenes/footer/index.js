import React from 'react';

import {linkedinIco} from 'root/static/icons';

import {
  Link,
  LinkedinIcon,
  Title,
} from 'root/scenes/footer/style';

const Footer = () => (
  <footer>
    <Link href='https://www.linkedin.com/in/serhii-sakal/' target="_blank">
      <Title
        align="center"
        color='textSecondary'
        variant="title"
      >
        Developed by Sakal
        <LinkedinIcon viewBox="0 0 434 434">
          <path d={linkedinIco}/>
        </LinkedinIcon>
      </Title>
    </Link>
  </footer>
);

export default Footer;

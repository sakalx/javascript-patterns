import React from 'react';

import {linkedinIco} from 'root/components/icons';

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
        variant="subheading"
      >
        Developed by SAKAL
        <LinkedinIcon viewBox="0 0 434 434">
          {linkedinIco}
        </LinkedinIcon>
      </Title>
    </Link>
    {navigator.onLine && <div className="sharethis-inline-share-buttons"/>}
  </footer>
);

export default Footer;

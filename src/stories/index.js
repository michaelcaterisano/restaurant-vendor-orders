import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import NewProductForm from '../components/NewProductForm'
import Categories from '../components/Categories'


storiesOf('Settings', module)
  .add('with text', () => <Categories />
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  );

import * as React from 'react';
import { Alert, Icon, AlertTitle } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { select, boolean, text } from '@storybook/addon-knobs';

// Component not finished yet
/*import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';

import AlertDocs from './Alert.docs.mdx';

export default {
  title: 'Components|Alert',
  component: Alert,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Alert'],
    theme: {
      context: 'web',
    },
    docs: {
      page: AlertDocs,
    },
  },
};*/

const variants: any = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};

const severities: any = {
  info: 'info',
  error: 'error',
  warning: 'warning',
  success: 'success',
};

const icons: any = Object.keys(iconNames);

export const Interactive = () => {
  const withTitle = boolean('with title', true);

  const customIcon = boolean('custom icon', false);

  return (
    <Alert
      icon={
        customIcon
          ? <Icon size="tiny" name={select('icon name', icons, icons[0])} />
          : undefined
      }
      variant={select('variant', variants, variants.standard)}
      severity={select('severity', severities, severities.success)}
    >
      <AlertTitle>{withTitle && text('title', 'This is the title message')}</AlertTitle>
      {text('message', 'This is the body message')}
    </Alert>
  );
};

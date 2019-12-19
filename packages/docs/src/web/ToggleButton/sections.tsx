import React, { useState } from 'react';
import { ToggleButton, Icon } from '@naturacosmeticos/natds-web';

const getIcon = (name, props: any = {}) => (
  <Icon name={name} size="small" {...props} />
);

export const colors = [
  {
    title: 'Primary',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Secondary',
    component: <ToggleButton color="secondary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Default',
    component: <ToggleButton color="default" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  }
];

export const sizes = [
  {
    title: 'Small with tiny icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-action-check', { size: 'tiny' })} iconOff={getIcon('outlined-action-check', { size: 'tiny' })}  />
  },
  {
    title: 'Small with small icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-action-check')} iconOff={getIcon('outlined-action-check')} />
  },
  {
    title: 'Medium with small icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-action-check')} iconOff={getIcon('outlined-action-check')} />
  },
  {
    title: 'Medium with standard icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-action-check', { size: 'standard' })} iconOff={getIcon('outlined-action-check', { size: 'standard' })} />
  }
];

export const attributes = [
  {
    title: 'Disabled',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-action-check')} iconOff={getIcon('outlined-action-check')} disabled />
  }
];

// src/components/button.stories.js
import React from 'react';

import Button from './button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My Button',
};
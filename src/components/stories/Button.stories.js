import React from 'react';

import { Button } from '../Button';

export default {
    title: 'Common/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const Defulat = Template.bind({});
Defulat.args = {
    label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Notice = Template.bind({});
Notice.args = {
    notice: true,
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

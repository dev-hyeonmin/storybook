
import React from 'react';
import Option from '../Option';

export default {
    title: 'customselect/Option',
    component: Option,
};

const Template = (args) => <Option {...args} />;

export const Default = Template.bind({});
Default.args = {
    option: {
        id: '1',
        title: 'Test Option',
    },
};

export const Keyword = Template.bind({});
Keyword.args = {
    option: {
        id: '1',
        title: 'Test Option',
    },
    keyword: 'Test'
};

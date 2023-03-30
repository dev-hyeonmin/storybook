import React from "react";
import Select from "../Select";

export default {
    title: 'customselect/Select',
    component: Select,
}

const Template = (args) => <Select {...args} />;
const defaultList = [
    {
        id: '1',
        title: 'Test Option',
    },
    {
        id: '2',
        title: 'Test Option 2',
    },
    {
        id: '3',
        title: 'Dev Option',
    },
    {
        id: '4',
        title: 'Dev Option 2',
    },
    {
        id: '5',
        title: 'Etc Option',
    },
];

export const Default = Template.bind({});
Default.args = {
    list: defaultList,
};

export const Keyword = Template.bind({});
Keyword.args = {
    list: defaultList,
    keyword: 'Dev',
}
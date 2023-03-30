import React from "react";
import SearchSelect from "../SearchSelect";

export default {
    title: 'customselect/SearchSelect',
    component: SearchSelect,
}

const Template = (args) => <SearchSelect {...args} />
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
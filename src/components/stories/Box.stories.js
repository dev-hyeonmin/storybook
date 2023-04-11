import React from "react";
import Box from "../Box";

export default {
    title: 'Common/Box',
    component: Box,
}

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Box title",
    column: "co2"
};
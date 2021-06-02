import React from 'react';
import Avatar from './Avatar';

export default {title: 'Components/Avatar', component: Avatar};

const Template = (args) => <Avatar {...args} />;

export const MainAvatar = Template.bind({});
MainAvatar.args = {
    size: 'large',
    appearance: 'circle',
    src: 'https://images.unsplash.com/photo-1534954553104-88cb75be7648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};
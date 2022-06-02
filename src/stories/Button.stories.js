import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: { handleClick: { action: 'clicked' } },
}

const Template = args => <Button {...args} />

// export const Red = () => <Button label="Red" backgroundColor="red" />

export const Red = Template.bind({});

Red.args = {
    label: 'Red',
    backgroundColor: 'red',
    size: 'md',
}
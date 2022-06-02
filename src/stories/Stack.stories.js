import Stack from '../components/Stack';

export default {
    title: 'Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: {
            type: "number",
            defaultValue: 4
        }
    },
}

const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args} >
        {[...Array(numberOfChildren).keys()].map(n => (
            <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>{n + 1}</div>
        ))}
    </Stack>)


export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: 'row',
    spacing: 4,
    wrap: false,
}

export const Vertical = Template.bind({});
Vertical.args = {
    direction: 'column',
    spacing: 4,
    wrap: false,
}

export const NoSpace = Template.bind({});
NoSpace.args = {
    direction: 'row',
    spacing: 0,
    wrap: false,
}

export const WrapOverFlow = Template.bind({});
WrapOverFlow.args = {
    numberOfChildren: 50,
    direction: 'row',
    spacing: 4,
    wrap: true,
}
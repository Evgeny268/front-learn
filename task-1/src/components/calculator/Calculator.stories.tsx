import Calculator from "./Calculator";
import {Meta, Story} from "@storybook/react";
import "../../App.css"
import StoriesHelper from "../StoriesHelper";

export default {
    title: 'components/calculator',
    component: Calculator
} as Meta;

export const Main: Story = () => {
    return <>
        <Calculator/>
        <StoriesHelper/>
    </>
};
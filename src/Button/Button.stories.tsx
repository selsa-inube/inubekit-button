import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { props } from "./props";
import { Button, IButton } from ".";

const story = {
  title: "inputs/Button",
  components: Button,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IButton) => <Button {...args} />;

Default.args = {
  children: "Button",
  appearance: "primary",
  path: "/privilege",
  iconAfter: <MdAdd />,
  loading: false,
  disabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  fullwidth: false,
  onClick: () => console.log("clicked from Default-story"),
  cursorHover: false,
  parentHover: false,
};

export { Default };
export default story;

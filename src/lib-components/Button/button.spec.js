import { shallowMount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const primary = true;
    const size = "medium";
    const wrapper = shallowMount(Button, {
      propsData: { label, primary, size },
    });
    expect(wrapper.props().label).toBe(label);
    expect(wrapper.props().primary).toBe(primary);
    expect(wrapper.props().size).toBe(size);
  });
});

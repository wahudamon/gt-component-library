import { shallowMount } from "@vue/test-utils";
import GTRadioButton from "./GTRadioButton.vue";

// will be edited after creating checkbox component.
describe("GTRadioButton.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const primary = true;
    const size = "medium";
    const wrapper = shallowMount(GTRadioButton, {
      propsData: { label, primary, size },
    });
    expect(wrapper.props().label).toBe(label);
    expect(wrapper.props().primary).toBe(primary);
    expect(wrapper.props().size).toBe(size);
  });
});

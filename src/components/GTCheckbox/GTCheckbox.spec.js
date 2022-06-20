import { shallowMount } from "@vue/test-utils";
import GTCheckbox from "./GTCheckbox.vue";

describe("GTCheckbox.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const primary = true;
    const size = "medium";
    const wrapper = shallowMount(GTCheckbox, {
      propsData: { label, primary, size },
    });
    expect(wrapper.props().label).toBe(label);
    expect(wrapper.props().primary).toBe(primary);
    expect(wrapper.props().size).toBe(size);
  });
});

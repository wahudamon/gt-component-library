import { shallowMount } from "@vue/test-utils";
import GTCombobox from "./GTCombobox.vue";

describe("GTCombobox.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const primary = true;
    const size = "medium";
    const wrapper = shallowMount(GTCombobox, {
      propsData: { label, primary, size },
    });
    expect(wrapper.props().label).toBe(label);
    expect(wrapper.props().primary).toBe(primary);
    expect(wrapper.props().size).toBe(size);
  });
});

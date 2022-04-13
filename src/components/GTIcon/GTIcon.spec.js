import { shallowMount } from "@vue/test-utils";
import GTIcon from "./GTIcon.vue";

describe("GTIcon.vue", () => {
  it("renders the props when passed", () => {
    const name = "gt-address-book-r";
    const size = "lg";
    const wrapper = shallowMount(GTIcon, {
      propsData: { name, size },
    });
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.props().size).toBe(size);
  });
});

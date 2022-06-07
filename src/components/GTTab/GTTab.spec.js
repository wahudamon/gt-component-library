import { shallowMount } from "@vue/test-utils";
import GTTabs from "./GTTabs.vue";

describe("GTTabs.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTTabs, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

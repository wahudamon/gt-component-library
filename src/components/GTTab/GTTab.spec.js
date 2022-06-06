import { shallowMount } from "@vue/test-utils";
import GTTab from "./GTTab.vue";

describe("GTTab.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTTab, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

import { shallowMount } from "@vue/test-utils";
import GTSlider from "./GTSlider.vue";

describe("GTSlider.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTSlider, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

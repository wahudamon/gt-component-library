import { shallowMount } from "@vue/test-utils";
import GTMultiRangeSlider from "./GTMultiRangeSlider.vue";

describe("GTMultiRangeSlider.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTMultiRangeSlider, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

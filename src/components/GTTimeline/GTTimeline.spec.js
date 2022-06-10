import { shallowMount } from "@vue/test-utils";
import GTTimeline from "./GTTimeline.vue";

describe("GTTimeline.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTTimeline, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

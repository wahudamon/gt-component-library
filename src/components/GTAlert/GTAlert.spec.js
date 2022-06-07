import { shallowMount } from "@vue/test-utils";
import GTAlert from "./GTAlert.vue";

describe("GTAlert.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTAlert, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

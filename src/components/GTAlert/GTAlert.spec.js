import { shallowMount } from "@vue/test-utils";
import GTAlert from "./GTAlert.vue";

// will be edited after creating checkbox component.
describe("GTAlert.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTAlert, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

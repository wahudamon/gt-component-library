import { shallowMount } from "@vue/test-utils";
import GTBreadcrumb from "./GTBreadcrumb.vue";

// will be edited after creating checkbox component.
describe("GTBreadcrumb.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTBreadcrumb, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

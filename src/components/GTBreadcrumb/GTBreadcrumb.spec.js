import { shallowMount } from "@vue/test-utils";
import GTBreadcrumb from "./GTBreadcrumb.vue";

describe("GTBreadcrumb.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTBreadcrumb, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

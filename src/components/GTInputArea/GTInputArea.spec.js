import { shallowMount } from "@vue/test-utils";
import GTInputArea from "./GTinputArea.vue";

// will be edited after creating input text component.
describe("GTInputArea.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTInputArea, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

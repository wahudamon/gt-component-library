import { shallowMount } from "@vue/test-utils";
import GTInputText from "./GTinputText.vue";

describe("GTInputText.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTInputText, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

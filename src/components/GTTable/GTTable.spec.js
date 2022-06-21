import { shallowMount } from "@vue/test-utils";
import GTTable from "./GTTable.vue";

describe("GTTable.vue", () => {
  it("renders the props when passed", () => {
    const label = "Hello World!";
    const wrapper = shallowMount(GTTable, {
      propsData: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});

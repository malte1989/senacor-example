import { shallowMount } from "@vue/test-utils";
import PartnerDetails from "@/components/PartnerDetails.vue";

describe("PartnerDetails.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PartnerDetails, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

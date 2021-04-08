import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import PartnerDetails from "@/components/PartnerDetails.vue";

new Vue({});

declare global {
  interface Window {
    ENV_CONFIG: any;
  }
}

window.customElements.define("partner-details", wrap(Vue, PartnerDetails));

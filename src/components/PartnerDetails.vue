<i18n src="../locale/PartnerDetails.locale.json"></i18n>
<template>
  <div>
    <div class="head">
      {{ $t("title") }}
    </div>
    <div class="body">
      <p>{{ toggle ? "external" : "default" }} Partner</p>
      <div>Id: {{ partner.id }}</div>
      <div>Email: {{ partner.email }}</div>
      <p>Addresse</p>
      <div>
        Strasse: {{ partner.address.street }} {{ partner.address.houseNumber }}
      </div>
      <div>
        Ort: {{ partner.address.postalCode }} {{ partner.address.city }}
      </div>
      <p>Bankinformationen</p>
      <div>Iban: {{ partner.bankAccount.bankName }}</div>
      <div>Bic: {{ partner.bankAccount.iban }}</div>
      <button @click="loadPartner">
        {{ toggle ? "Load default Partner" : "Load external Partner" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import i18n from "../i18n";
import { Component, Prop, Vue } from "vue-property-decorator";
import examplePartner from "../sample/partner.json";
import { Partner } from "@/types/Partner";

const defaultPartner: Partner = {
  id: 123,
  email: "malte.anthes@zurich.com",
  address: {
    street: "Venloer Str",
    houseNumber: 99,
    postalCode: 50672,
    city: "Köln",
  },
  bankAccount: {
    bankName: "Volksbank",
    iban: "DE123",
  },
};

@Component({
  i18n,
})
export default class PartnerDetails extends Vue {
  // Class Content goes here
  @Prop({ required: true })
  private msg!: string;
  private partner: Partner = defaultPartner;
  private toggle = false;

  /* get partnerInfo(): string {
    return this.toggle ? "external" : "default";
  } */

  private loadPartner() {
    this.partner = this.toggle ? defaultPartner : examplePartner;
    this.toggle = !this.toggle;
  }
}
</script>

<style lang="scss" scoped>
.head {
  background-color: grey;
}
.body {
  background-color: lightblue;
  padding: 2rem;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.body p {
  font-size: 30px;
  font-style: bold;
}
button {
  margin-top: 2rem;
  background-color: #ff5e2e;
  color: #fff;
  cursor: pointer;
  border: none;
  height: 48px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
  transition: background-color 0.25s linear;
  padding: 0 20px;
}
</style>

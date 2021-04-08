<i18n src="../locale/PartnerDetails.locale.json"></i18n>
<template>
  <div>
    <div class="head">
      {{ $t("title") }}
    </div>
    <div class="body">
      <p>{{ type }} Partner</p>
      <div>Id: {{ partner.id }}</div>
      <div>Email: {{ partner.email }}</div>
      <p>Addresse</p>
      <div>
        Strasse: {{ partner.address.street }}
        {{ partner.address.houseNumber }}
      </div>
      <div>
        Ort: {{ partner.address.postalCode }} {{ partner.address.city }}
      </div>
      <p>Bankinformationen</p>
      <div>Iban: {{ partner.bankAccount.bankName }}</div>
      <div>Bic: {{ partner.bankAccount.iban }}</div>
      <div>
        <button @click="loadPartnerDefault">Load default Partner</button>
      </div>
      <div>
        <button @click="loadPartnerJson">Load Json Partner</button>
      </div>
      <div>
        <input v-model="partnerId" />
        <button @click="loadPartnerAxios(partnerId)">Load axios Partner</button>
      </div>
      <div v-if="loading" class="mt-1">Loading...</div>
      <div v-if="error" class="error mt-1">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import i18n from "../i18n";
import { Component, Prop, Vue } from "vue-property-decorator";
import jsonPartner from "../sample/partner.json";
import { Partner } from "@/types/Partner";
import axios, { AxiosError, AxiosResponse } from "axios";

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
  private type = "default";
  private loading = false;
  private error = "";
  private partnerId = "123";

  private loadPartnerJson() {
    this.partner = jsonPartner;
    this.type = "json";
  }

  private loadPartnerDefault() {
    this.partner = defaultPartner;
    this.type = "default";
  }

  private loadPartnerAxios(partnerId: string) {
    this.loading = true;
    this.error = "";
    axios
      .get(`http://localhost:5002/partner/${partnerId}.json`)
      .then((response: AxiosResponse) => {
        this.partner = response.data;
        this.type = "axios";
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 500) {
          this.error = "Internal server error.";
        } else if (error.response?.status === 400) {
          this.error = "Service nichtt verfügbar.";
        } else if (error.response?.status === 404) {
          this.error = "Partner nicht gefunden.";
        } else {
          this.error = "Unbekannter Fehler.";
        }
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
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
.mt-1 {
  margin-top: 1rem;
}
.error {
  color: red;
  font-style: bold;
}
</style>

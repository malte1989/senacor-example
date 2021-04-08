<i18n src="../locale/PartnerDetails.locale.json"></i18n>
<template>
  <div>
    <div class="head">
      {{ $t("title") }}
    </div>
    <div class="body">
      {{ msg }}
      <p>
        {{ $t("text") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import i18n from "../i18n";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  i18n,
})
export default class PartnerDetails extends Vue {
  // Class Content goes here
  @Prop({ required: true })
  private msg!: string;
}
</script>

<style lang="scss" scoped>
.head {
  background-color: grey;
}
.body {
  background-color: green;
}
</style>

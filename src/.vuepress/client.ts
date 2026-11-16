import { defineClientConfig } from "@vuepress/client";
import { onMounted } from "vue";
import { useThemeData } from "vuepress-theme-hope/composables";

export default defineClientConfig({
  setup() {
    const theme = useThemeData();

    onMounted(() => {
      theme.value.copyright = `<p>@ ${new Date().getFullYear()} iikaros.top 版权所有</p>`;
    });
  },
});

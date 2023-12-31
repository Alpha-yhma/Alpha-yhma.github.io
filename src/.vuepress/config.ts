import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Ikaros",
  description: "YHMA的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

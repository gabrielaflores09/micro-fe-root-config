import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@gf/single-spa-navbar",
  app: () => System.import("@gf/single-spa-navbar"),
  activeWhen: (location) => location.pathname.includes("/"),
});

registerApplication({
  name: "@gf/single-spa-react",
  app: () => System.import("@gf/single-spa-react"),
  activeWhen: (location) => location.pathname === "/react",
});

registerApplication({
  name: "@gf/single-spa-vue",
  app: () => System.import("@gf/single-spa-vue"),
  activeWhen: (location) => location.pathname === "/vue",
});

registerApplication({
  name: "@gf/single-spa-angular",
  app: () => System.import("@gf/single-spa-angular"),
  activeWhen: (location) => location.pathname === "/angular",
});

start({
  urlRerouteOnly: true,
});

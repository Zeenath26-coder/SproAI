import { initNavbar, initMobileMenu } from "./navbar.js";
import {
  setupGenerateReport,
  setupScrollLinks,
  setupRobotEyes,
} from "./aiwindow.js";
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  setupGenerateReport();
  setupScrollLinks();
  setupRobotEyes();
});
//# sourceMappingURL=main.js.map

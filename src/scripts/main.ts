import { initNavbar, initMobileMenu } from "./navbar";
import {
  setupGenerateReport,
  setupScrollLinks,
  setupRobotEyes,
} from "./aiwindow";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  setupGenerateReport();
  setupScrollLinks();
  setupRobotEyes();
});

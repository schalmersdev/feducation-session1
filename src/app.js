import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeds = true;

  /**
   * Getter for the features property
   */
  get feds() {
    return [
      {
        acid: "erin@accenture.com",
        label: "Erin",
        icon: "utility:edit",
      },
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "utility:refresh",
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "utility:brush",
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "utility:brush",
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "utility:brush",
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "utility:brush",
      },
    ];
  }
}

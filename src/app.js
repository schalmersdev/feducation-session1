import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Feducation Session 1 | LWC - The basics";

  showFeds = true;

  /**
   * Getter for the features property
   */
  get feds() {
    return [
      {
        acid: "erin@accenture.com",
        label: "Erin",
        icon: "jessica.png",
      },
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "karan.png",
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "ray.png",
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "shoel.png",
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "jessica.png",
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "liam.png",
      },
    ];
  }
}

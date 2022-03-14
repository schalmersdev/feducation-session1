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
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
      },
    ];
  }
}

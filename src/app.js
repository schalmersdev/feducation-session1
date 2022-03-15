import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeds = true;
  queryTerm;

  /**
   * Getter for the features property
   */
  get feds() {
    return [
      {
        acid: "erin@accenture.com",
        label: "Erin",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css'],
      },
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['css', 'angular'],
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'angular'],
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'angular'],
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'angular'],
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'angular'],
      },
    ];
  }

  handleKeyUp(evt) {
      const isEnterKey = evt.keyCode === 13;
      if (isEnterKey) {
          this.queryTerm = evt.target.value;
      }
  }
}

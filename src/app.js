import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Find a FED";

  showFeds = true;
  matchingFeds = 0;
  queryTerm;

  /**
   * Getter for the features property
   */
  get feds() {
    const allFeds = [
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['scrum', 'agile'],
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "https://i.ibb.co/1RZvqK5/emoji-2.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['angular'],
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "https://i.ibb.co/q5hpFZD/emoji-4.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['jquery'],
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "https://i.ibb.co/8KTQ4LL/jessica.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem'],
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "https://i.ibb.co/VB7xRYT/liam.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem'],
      },
      {
        acid: "erin@accenture.com",
        label: "Erin",
        icon: "https://i.ibb.co/WDXrz16/emoji-1.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem', 'angular'],
      },
    ];

    //this.matchingFeds = allFeds.filter(item => item.skills.includes(this.queryTerm)).length;

    return this.queryTerm ? allFeds.filter(item => item.skills.includes(this.queryTerm)) : allFeds;
  }

  handleKeyUp(evt) {
      //const isEnterKey = evt.keyCode === 13;
      //if (isEnterKey) {
          this.queryTerm = evt.target.value;
      //}
  }
}

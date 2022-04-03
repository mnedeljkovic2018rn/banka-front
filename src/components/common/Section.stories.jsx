
import React from "react";

import Section from "./Section";

export default {
  title: "Components/Section",
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Osnovno",
  fields: [['Ime', 'Marko'], ['Prezime', 'Marković'], ['JMBG', '01012001700000'], ['pozicija', 'Šalterski radnik']]
};

export const Password = Template.bind({});
Password.args = {
  title: "Šifra",
  button: "Promenite šifru"
};
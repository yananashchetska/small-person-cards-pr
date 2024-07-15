import { Person } from "./components/Person";

import "./App.scss";

export const App = () => (
  <>
    <Person
      name="Jannet"
      sex="f"
      age={43}
      isMarried={true}
      partnerName="Alex"
    />
    <Person name="Alex" sex="m" isMarried={true} partnerName="Jannet" />
    <Person name="Mary" sex="f" age={9} isMarried={false} />
  </>
);

// export const dad = {
//   name: 'Andrian',
//   age: 41,
//   sex: 'm',
//   isMarried: true,
//   partnerName: 'Iryna',
// };

// export const mum = {
//   name: 'Iryna',
//   sex: 'f',
//   isMarried: true,
//   partnerName: 'Andrian',
// };

// export const sis = {
//   name: 'Ulia',
//   age: 9,
//   sex: 'f',
//   isMarried: false,
// };

/* eslint-disable react/prop-types */
export const Person = (person ) => {
  const partnerType = person.sex === "m" ? "wife" : "husband";
  const hasPartner = person.isMarried ? true : false;

  return (
    <section className="Person">
      <h1 className="Person__name"> {person.name}</h1>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">

        {(hasPartner && `${person.partnerName} is my ${partnerType}`) ||
          "I am not married"}
      </p>
    </section>
  );
};

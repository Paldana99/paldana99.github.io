import EducationCard from "./education-card/education-card";
import uc_logo from "../img/logo/UC-BLANCO-01.png";
import centrale_logo from "../img/logo/Logo-EcoleCentrale.png";
import React from "react";
import "./education.style.css";

const Education = () => (
  <section className={"education"}>
    <h1 className="mb-5">Educación</h1>
    <EducationCard
      logo={uc_logo}
      nombre={"Universidad Católica de Chile"}
      subTitulo={"Ingeniería Civil Computación"}
      fechaInicio={"2018"}
      fechaFin={"2023"}
    />
    <EducationCard
      logo={centrale_logo}
      nombre={"Centrale Lille"}
      subTitulo={"Ingeniería Generalista"}
      fechaInicio={"2020"}
      fechaFin={"2023"}
    />
  </section>
);

export default Education;

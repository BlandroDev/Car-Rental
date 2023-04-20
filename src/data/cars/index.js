import { bmw320,glk,g6,passat,camry,audi } from "src/assets/images/cars";
import { bmw320_2,g6_2,camry_2,mercedes_2,audi_2,passat_2} from "src/assets/images/models";

export const cars = [
  {
    marca: "Audi",
    modelo: "A1",
    año: 2012,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Manual",
    combustible: "Gasolina",
    costo: 45,
    src:audi,
    src_2:audi_2
  },
  {
    marca: "Volkswagen",
    modelo: "Golf 6",
    año: 2008,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Manual",
    combustible: "Diesel",
    costo: 37,
    src:g6,
    src_2:g6_2
  },
  {
    marca: "Toyota",
    modelo: "Camry",
    año: 2006,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Automático",
    combustible: "Híbrido",
    costo: 30,
    src:camry,
    src_2:camry_2
  },
  {
    marca: "BMW",
    modelo: 320,
    año: 2012,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Manual",
    combustible: "Diesel",
    costo: 35,
    src:bmw320,
    src_2:bmw320_2
  },
  {
    marca: "Mercedes",
    modelo: "Benz GLK",
    año: 2006,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Manual",
    combustible: "Diesel",
    costo: 50,
    src:glk,
    src_2:mercedes_2
  },
  {
    marca: "Volkswagen",
    modelo: "Passat cc",
    año: 2008,
    puertas: "4/5",
    aire: "Sí",
    transmision: "Automático",
    combustible: "Gasolina",
    costo: 25,
    src:passat,
    src_2:passat_2
  },
];

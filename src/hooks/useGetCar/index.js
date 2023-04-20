import { useEffect, useState } from "react";
import { cars } from "src/data/cars";
export const useGetCar = ({ modelo }) => {
  const [dataCar, setDataCar] = useState(false);

  useEffect(() => {
    const data = cars.filter((data) => data.modelo == modelo);
    if (data.length > 0) {
      setDataCar(data);
    }
  }, [modelo]);

  return {
    dataCar,
  };
};

export const minusFivePercent = (value: number): number => {
    if (isNaN(value)) {
      console.error("El valor proporcionado no es un número válido.");
      return -1;
    }
    const result = value - (value * 0.05); // Restamos el 5%
    return result;
  };
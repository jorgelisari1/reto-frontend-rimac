const minusFivePercent = (stringValue: string): number | null => {
    const value = parseFloat(stringValue);
  
    if (isNaN(value)) {
      console.error("El valor proporcionado no es un número válido.");
      return null;
    }
  
    const result = value - (value * 0.05); // Restamos el 5%
  
    return result;
  };
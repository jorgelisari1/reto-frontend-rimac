export const calculateAgeFromString = (birthDateString: string): number | null => {
    const parts = birthDateString.split("-").map(Number);
  
    if (parts.length !== 3 || parts.some(isNaN)) {
      console.error("Formato de fecha incorrecto. Debe ser 'dd-mm-yyyy'.");
      return null;
    }
  
    const [day, month, year] = parts;
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    if (isNaN(birthDate.getTime())) {
      console.error("Fecha de nacimiento no válida.");
      return null;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };
  
// utils.ts
export const fetchJson = async <T>(url: string, data?: any): Promise<T> => {
    try {
      const options: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar otros encabezados según sea necesario
        },
        body: data ? JSON.stringify(data) : undefined,
      };
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
  
      const result: T = await response.json();
      return result;
    } catch (error: any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
  
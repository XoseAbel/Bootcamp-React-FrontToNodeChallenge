interface newUserInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  condition: string;
  phone?: {
    countryCode: number;
    number: number;
  };
}

export { newUserInterface };

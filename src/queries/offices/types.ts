export type OfficeData = {
  id: string;
  type: string;
  value: {
    city: string;
    email_address: string;
    image: {
      alt: string;
      large: string;
      mobile: string;
    };
    phone_number: string;
    street: string;
    street_number: string;
    zip_code: string;
  };
};

export type Office = {
  items: {
    offices: OfficeData[];
  }[];
};

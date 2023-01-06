export type Employee = {
  id: string;
  type: string;
  value: {
    name: string;
    function: string;
    image: {
      alt: string;
      large: string;
      small: string;
      mobile: string;
    };
    image_email_signature: {
      alt: string;
      large: string;
    };
    office_id: string;
    birthdate: Date;
    favorite_pet: string;
    favorite_food: string;
  };
};

export type Team = {
  items: {
    employees: Employee[];
  }[];
};

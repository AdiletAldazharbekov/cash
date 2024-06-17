export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

//Можно создать дубль типа как интерфейс на случай если нужны будут реализация более специфичных методов которые Type не может сдлелать
export interface ICustomer extends Customer {}

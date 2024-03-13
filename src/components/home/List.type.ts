export interface List {
  id: string;
  name: string;
 
  email: string;
}

export const dummyList: List[] = [
  {
    id: new Date().toJSON().toString(),
    name: "dummy1",
    
    email: "souzza@gmaiil.com",
  },
];

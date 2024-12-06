export interface Garden {
  _id: string;
  gardenId: number;
  name: string;
  location: string;
  description?: string;
  dateCreated?: string;
  dateModified?: string;
}

/*
  DTO is a Data Transfer Object
  Data Transfer Objects are a software design pattern used to transfer data between different layers
  (frontend, backend, APIs, etc.,) in your application. They are intended to be as simple as possible
  and only contain the data needed for a specific operation. This means, they should only contain
  fields, be easily serializable (JSON or XML), and flat (no nested properties or complex data
  structures).

  TypeScript provides us with a utility type called “Omit” that we can use to omit certain properties
  from a given object type. In our case, we are creating a new object type called
  “UpdateGardenDTO” with properties for name, location, and description. This is possible,
  because we extend the “Garden” type and then omit the properties _id, gardenId, dateCreated,
  and dateModified. This is a simple, but elegant way, to alter the structure of an existing
  TypeScript interface.

  Update Garden API expects a payload of
  {
    “name”: “GardenName”,
    “location”: “GardenLocation”,
    “description”: “GardenDescription”
  }
*/
export type UpdateGardenDTO = Omit<Garden, '_id' | 'gardenId' | 'dateCreated' | 'dateModified'>;
export type AddGardenDTO = Omit<Garden, '_id' | 'gardenId' | 'dateModified'>;

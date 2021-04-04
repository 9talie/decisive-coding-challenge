import { Person } from "./person";

export interface FilterPeopleArguments{
    people: Person[];
    search :string; 
}
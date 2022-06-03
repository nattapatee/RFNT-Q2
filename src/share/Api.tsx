import axios from "axios";
type result = {
  categories: string[]
  count: number
}
export class Api {
  public getCatagory() {
    return axios.get<result>(
      `https://api.publicapis.org/categories`
    );
  }
}
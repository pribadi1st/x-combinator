import { defineQuery } from "next-sanity"

export const STARTUPS_QUERY = defineQuery(`*[_type == "idea"]{
  author -> {
    _id, name
  }
}`)

export const query = () => {

}
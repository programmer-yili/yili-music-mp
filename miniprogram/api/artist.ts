import { get } from "./request"

const prefix = '/artists'
interface ArtistSearchFilter {
  recommended?: Boolean,
  sortBy?: String
}

const search = (searchFilter : ArtistSearchFilter) => {
  return get(`${prefix}/`, searchFilter);
}

export default {
  search
}
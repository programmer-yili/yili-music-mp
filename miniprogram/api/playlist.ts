import { get } from './request'

const prefix = '/playlists'

const detail = (id: string) => {
  return get(`${prefix}/${id}`);
}

interface PlaylistSearchFilter {
  recommended?: Boolean,
  special?: Boolean
}
const search = (searchFilter?: PlaylistSearchFilter) => {
  return get(`${prefix}/`, searchFilter);
}



export default {
  detail,
  search
}


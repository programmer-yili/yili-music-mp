import { get } from './request'

export const detail = (id: any) => {
  return get(`/playlists/${id}`);
}
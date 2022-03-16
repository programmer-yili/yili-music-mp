import { get } from './request'

export const detail = (id: string) => {
  return get(`/playlists/${id}`);
}
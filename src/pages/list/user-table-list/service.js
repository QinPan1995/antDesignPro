import request from '@/utils/request';
export async function queryUser(params) {
  return request('/api/user/list', {
    //return request('/api/monitor/online/user', {
    params,
  });
}
export async function removeUser(params) {
  return request('/api/user', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addUser(params) {
  return request('/api/user', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateUser(params) {
  return request('/api/user', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}

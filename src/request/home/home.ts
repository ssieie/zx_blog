import service from '@/request/request';

export function getHomeInfo(data: any) {
  return service({
    url: '/test',
    method: 'post',
  });
}

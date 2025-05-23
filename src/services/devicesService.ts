import {request} from './request.ts';

const LOCAL_BASE_URL = '/devices';

export const getNotifications = () => {
  return request(LOCAL_BASE_URL + '/anomalies');
};

export const getStatuses = async () => {
  return request(LOCAL_BASE_URL + '/status');
};

export const getEmergencyReport = () => {
  return request(LOCAL_BASE_URL + '/report');
};
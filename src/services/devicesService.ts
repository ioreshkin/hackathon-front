import {request} from './request.ts';

const LOCAL_BASE_URL = '/devices';

export const getNotifications = async () => {
  return await request(LOCAL_BASE_URL + '/anomalies');
};

export const getStatuses = async () => {
  return await request(LOCAL_BASE_URL + '/status');
};

export const getEmergencyReport = async () => {
  return await request(LOCAL_BASE_URL + '/report_text');
};

export const getDailyReport = async () => {
  return await request(LOCAL_BASE_URL + '/report_data');
};

export const simulate = async () => {
  return await request(LOCAL_BASE_URL + '/simulate', {
    method: 'POST',
  });
};
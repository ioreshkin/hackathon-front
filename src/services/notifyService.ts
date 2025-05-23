import {request} from './request.ts';
import {ISettings} from '../utils/types.ts';

const LOCAL_BASE_URL = 'notify-settings';

export const setSettings = async (data: ISettings) => {
  return await request(LOCAL_BASE_URL + '/anomalies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
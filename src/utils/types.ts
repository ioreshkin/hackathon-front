export interface INotification {
  flat: number;
  parameter: string;
  level: 'warning' | 'critical';
  timestamp: number;
  text: string;
}

export interface IEmergencyEvent {
  flat: number;
  title: string;
  summary: string;
}

export interface IEmergencyReport {
  date: string;
  events: IEmergencyEvent[];
}

export interface IDailyReport {
  parameter: string;
  flats: IFlatValues[];
}

export interface ISettings {
  hum: boolean;
  temp: boolean;
  co2: boolean;
  lux: boolean;
  airIaq: boolean;
}

export interface IFlat {
  id: number;
  hum: 'normal' | 'warning' | 'critical';
  temp: 'normal' | 'warning' | 'critical';
  co2: 'normal' | 'warning' | 'critical';
  lux: 'normal' | 'warning' | 'critical';
  airIaq: 'normal' | 'warning' | 'critical';
}

export interface IFlatValues {
  id: number;
  values: number[];
}
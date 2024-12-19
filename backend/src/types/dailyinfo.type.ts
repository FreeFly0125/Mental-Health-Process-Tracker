/** @format */

export type CreateDailyLogType = {
  email: string;
  date: Date;
  mood: string;
  anxiety: number;
  sleepHours: number;
  sleepLevel: string;
  activities: string[];
  actTime: number;
  social: string[];
  stressLevel: string;
  symptom: string;
};

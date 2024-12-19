/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity({ name: "dailyinfo" })
export class DailyInfoEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ name: "email" })
  email: string;

  @Column({ type: "date" })
  date: Date;

  @Column({
    name: "Mood Ratings",
    type: "enum",
    enum: ["very sad", "sad", "normal", "happy", "very happy"],
  })
  mood: string;

  @Column({ name: "Anxiety Level" })
  anxiety: number;

  @Column({ name: "Sleep Hours" })
  sleepHours: number;

  @Column({
    name: "Sleep Level",
    type: "enum",
    enum: ["very bad", "bad", "normal", "good", "very good"],
  })
  sleepLevel: string;

  @Column({ name: "Activity Types", type: "text", array: true, default: [] })
  activities: string[];

  @Column({ name: "Activity Time" })
  actTime: number;

  @Column({
    name: "Social Interactions",
    type: "text",
    array: true,
    default: [],
  })
  social: string[];

  @Column({
    name: "Stress Level",
    type: "enum",
    enum: ["very low", "low", "normal", "high", "very high"],
  })
  stressLevel: string;

  @Column({ name: "Symptom" })
  symptom: string;
}

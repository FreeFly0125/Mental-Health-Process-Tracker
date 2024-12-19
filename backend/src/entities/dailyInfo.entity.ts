/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity({ name: "dailyinfo" })
export class DailyInfoEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @Column({ name: "date" })
  date: Date;
}

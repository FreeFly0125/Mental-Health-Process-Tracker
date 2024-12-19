/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity({ name: "user" })
export class UserEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ name: "name" })
  name: string;
  string;

  @Column({ name: "email" })
  email: string;
}

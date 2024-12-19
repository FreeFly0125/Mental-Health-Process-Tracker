/** @format */

import { CreateDateColumn, Entity } from "typeorm";

@Entity()
export class CoreEntity {
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}

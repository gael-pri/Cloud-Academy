import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Article } from "./article";
  
  @Entity()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_tag?: number;
  
    @Column({ nullable: true })
    name?: string;

    @ManyToMany(() => Article, article => article.tags)
    articles?: Article[];

    constructor(
      name?: string, 
    ) {
      super();
        this.name = name;
      }
}
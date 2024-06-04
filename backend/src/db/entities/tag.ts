import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Article } from "./article";
  
  @Entity()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    name: string;

    @ManyToMany(() => Article, article => article.tag)
    article: Article[];

    constructor(
      name: string = '', 
    ) {
      super();
        this.name = name;
      }
}
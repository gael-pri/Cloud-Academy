import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Article } from "./article";
  
  @Entity()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_tag?: number;
  
    @Column({ nullable: true })
    name?: string;

    // @OneToMany(() => Article, article => article.tag)
    // articles?: Promise<Article[]>

    constructor(
      name?: string, 
    ) {
      super();
        this.name = name;
      }
}
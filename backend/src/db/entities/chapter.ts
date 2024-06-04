import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Article } from "./article";
import { Section } from "./section";
  
  @Entity()
  export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Article, article => article.chapter)
    article?: Promise<Article[]>;

    @ManyToOne(() => Section, section => section.chapter)
    section?: Section[];

    constructor(
      title: string = '', 
      description: string = '', 
    ) {
      super();
        this.title = title;
        this.description = description;
      }
}
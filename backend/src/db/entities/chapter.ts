import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Article } from "./article";
import { Section } from "./section";
  
  @Entity()
  export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_chapter?: number;
  
    @Column()
    title: string;

    @Column({ nullable: true })
    description?: string;

    // @ManyToOne(() => Section, section => section.chapters)
    // section?: Section[];

    // @OneToMany(() => Article, article => article.chapter)
    // articles?: Promise<Article[]>;

    @Column()
    sectionId?: string;

    constructor(
      title: string = '',
      description?: string,
      sectionId: string= '',
    ) {
      super();
        this.title = title;
        this.description = description;
        this.sectionId = sectionId;
      }
}
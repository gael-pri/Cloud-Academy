import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
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

    @ManyToOne(() => Section, section => section.chapters, { eager: true })
    @JoinColumn({ name: "sectionId" })
    section?: Section;

    @Column()
    sectionId: string;

    @OneToMany(() => Article, article => article.chapter)
    articles?: Article[];
    
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
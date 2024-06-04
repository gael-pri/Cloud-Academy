import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Category } from "./category";
import { Chapter } from "./chapter";
  
  @Entity()
  export class Section extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    name: string;

    @ManyToOne(() => Category, category => category.section)
    category?: Promise<Category[]>;

    @OneToMany(() => Chapter, chapter => chapter.section)
    chapter?: Promise<Chapter[]>;

    constructor(
      name: string = '', 
    ) {
      super();
        this.name = name;
      }
}
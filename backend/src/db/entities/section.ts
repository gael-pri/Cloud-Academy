import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Category } from "./category";
import { Chapter } from "./chapter";
  
  @Entity()
  export class Section extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_section?: number;
  
    @Column()
    name: string;

    // @ManyToOne(() => Category, category => category.sections, { eager: true })
    // category?: Category[];

    @Column()
    categoryId: string;

    // @OneToMany(() => Chapter, chapter => chapter.section)
    // chapters?: Promise<Chapter[]>;

    constructor(
      name: string = '', 
      categoryId: string = '',
    ) {
      super();
        this.name = name;
        this.categoryId = categoryId;
      }
}
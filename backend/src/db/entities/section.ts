import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./category";
import { Chapter } from "./chapter";
  
  @Entity()
  export class Section extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_section?: number;
  
    @Column()
    name: string;

    @ManyToOne(() => Category, category => category.sections, { eager: true })
    @JoinColumn({ name: "categoryId" })
    category!: Category;

    @Column()
    categoryId!: number;

    @OneToMany(() => Chapter, chapter => chapter.section)
    chapters!: Chapter[];

    constructor(
      name: string = '', 
      categoryId: number = 0
    ) {
      super();
        this.name = name;
        this.categoryId = categoryId;
      }
}
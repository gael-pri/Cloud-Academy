import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Chapter } from "./chapter";
import { Tag } from "./tag";
  
  @Entity()
  export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    description: string;

    @ManyToOne(() => Chapter, chapter => chapter.article)
    chapter?: Chapter[];

    @ManyToMany(() => Tag, tag => tag.article)
    tag?: Tag[];

    constructor(
      title: string = '',
      subtitle: string = '', 
      description: string = '', 
    ) {
      super();
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
      }
}
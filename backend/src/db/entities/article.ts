import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Chapter } from "./chapter";
import { Tag } from "./tag";
  
  @Entity()
  export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_article?: number;
  
    @Column()
    title: string;

    @Column({ nullable: true })
    subtitle?: string;

    @Column({ nullable: true })
    description?: string;

    // @ManyToOne(() => Chapter, chapter => chapter.articles)
    // chapter?: Chapter;

    @Column()
    chapterId: string;

    // @ManyToOne(() => Tag, tag => tag.articles)
    // tag?: Tag;

    // @Column()
    // tagId: string;


    constructor(
      title: string = '',
      subtitle?: string, 
      description?: string,
      chapterId: string ='',
      //tagId: string ='',
    ) {
      super();
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.chapterId = chapterId;
        //this.tagId = tagId;
      }
}
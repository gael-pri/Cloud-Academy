import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
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

    @ManyToOne(() => Chapter, chapter => chapter.articles, { eager: true })
    @JoinColumn({ name: "chapterId" })
    chapter?: Chapter;

    @Column()
    chapterId: string;

    @ManyToMany(() => Tag, tag => tag.articles)
    @JoinTable({
        name: "articles_tags",
        joinColumn: { name: "articleId", referencedColumnName: "id_article" },
        inverseJoinColumn: { name: "tagId", referencedColumnName: "id_tag" }
    })
    tags?: Tag[];

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
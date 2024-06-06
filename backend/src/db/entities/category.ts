import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Section } from "./section";
  
  @Entity()
  export class Category extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id_category?: number;
  
    @Column()
    name: string;

    @Column()
    description: string;

    // @OneToMany(() => Section, section => section.category)
    // sections?: Promise<Section[]>;

    constructor(
      name: string = '',
      description: string = '',
    ) {
      super();
        this.name = name;
        this.description = description;
      }
}
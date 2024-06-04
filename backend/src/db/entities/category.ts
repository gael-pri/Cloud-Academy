import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Section } from "./section";
  
  @Entity()
  export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    name: string;

    @OneToMany(() => Section, section => section.category)
    section?: Promise<Section[]>;

    constructor(
      name: string = '', 
    ) {
      super();
        this.name = name;
      }
}
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
  
  @Entity()
  export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    title: string;

    constructor(
      name: string = '', 
    ) {
      super();
        this.title = name;
      }
}
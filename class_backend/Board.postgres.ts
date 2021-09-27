import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @ : 데코레이터
// 아래 클래스는 지금 부터 데이터 베이스다 !
@Entity() //데이터베이스 테이블
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // PK (프라이머리 키)
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}

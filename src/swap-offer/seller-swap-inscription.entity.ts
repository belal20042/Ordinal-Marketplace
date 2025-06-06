import {
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

import { Inscription } from '@src/inscription/inscription.entity';
import { SwapOffer } from './swap-offer.entity';

@Entity('seller_swap_inscription')
export class SellerSwapInscription {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ description: `Unique uuid`, maximum: 36 })
  @Column({ type: 'varchar', nullable: false, length: 36 })
  uuid: string;

  @Column({ type: 'integer', nullable: false })
  inscriptionId: number;

  @Column({ type: 'integer', nullable: false })
  swapOfferId: number;

  @ApiProperty({
    description: 'Date when the user was created',
    required: true,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Date when user was updated the last time',
    required: false,
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude({ toPlainOnly: true })
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(
    () => Inscription,
    (inscription) => inscription.sellerSwapInscription,
  )
  inscription: Inscription;

  @ManyToOne(() => SwapOffer, (swapOffer) => swapOffer.sellerSwapInscription)
  swapOffer: SwapOffer;
}

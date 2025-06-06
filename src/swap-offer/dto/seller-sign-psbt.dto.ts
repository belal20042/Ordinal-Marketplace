import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';

import { WalletTypes } from '@src/user/user.entity';

export class SellerSignPsbtDto {
  @ApiProperty({
    example:
      'e19eea22dc6f6fc16c5a6aad4f6c7bdfe16733def97be0f6cb1c5d12ede37dbfi0',
    required: false,
    minimum: 1,
    maximum: 5000,
    description: 'Unsigned Psbt',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(5000)
  psbt: string;

  @ApiProperty({
    example:
      '032d5536574e87d1e394219d536e8e2087cfa0de3787e49820315bdcb291ef6723',
    required: false,
    minimum: 1,
    maximum: 5000,
    description: 'Seller signed Psbt',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(5000)
  signedPsbt: string;

  @ApiProperty({
    example: 'Unisat',
    required: false,
    minimum: 1,
    maximum: 128,
    description: 'Seller wallet type',
  })
  @IsEnum(WalletTypes)
  walletType: WalletTypes;
}

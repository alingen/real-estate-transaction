import { IsInt, IsString, Min, Max, IsIn } from '@nestjs/class-validator';
import { Transform } from '@nestjs/class-transformer';

export class RealEstateQueryDto {
  @IsInt()
  @Min(2009)
  @Max(2021)
  @Transform(({ value }) => parseInt(value, 10))
  year: number;

  @IsInt()
  @Min(1)
  @Max(47)
  @Transform(({ value }) => parseInt(value, 10))
  prefCode: number;

  @IsString()
  cityCode: string;

  @IsInt()
  @IsIn([1, 2, 3, 4, 5])
  @Transform(({ value }) => parseInt(value, 10))
  displayType: number;
}

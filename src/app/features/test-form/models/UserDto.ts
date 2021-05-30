export class UserDto {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public isActive: boolean
  ) {}
}

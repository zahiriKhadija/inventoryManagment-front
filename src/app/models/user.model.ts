import { RoleDto } from "./roleDto.model";

export class User{
     constructor(
     userId: number,
     email: string,
     password: string,
     firstname: string,
     lastname: string,
     role: Array<RoleDto>
     ){}
}
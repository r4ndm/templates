export class CreateUserDto {
  /** User's email address. Required */
  email: string;

  /** User's first name */
  firstName?: string;

  /** User's last name */
  lastName?: string;

  /** User's profile summary */
  profile?: string;
}

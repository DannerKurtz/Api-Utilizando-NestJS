import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface UserSchema {
  name: string;
  email: string;
  password: string;
  createAt: Date;
}

export class User {
  props: UserSchema;
  _id: string;

  constructor(props: Replace<UserSchema, { createAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createAt: props.createAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }

  get name(): string {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }

  get createAt(): Date {
    return this.props.createAt;
  }
}

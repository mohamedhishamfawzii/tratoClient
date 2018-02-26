export class User {
  name: string;
  contacts: string[];
  user_type: string;
  username: string;
  password: string;
  email: string;
  id: string ;
  constructor(name: string,
  contacts: string[],
  user_type: string,
  username: string,
  password: string,
  email: string,
              id: string) {
    this.name = name;
    this.id = id ;
    this.contacts = contacts;
    this.user_type = user_type;
    this.username = username;
    this.password = password;
    this.email = email;
  }

}

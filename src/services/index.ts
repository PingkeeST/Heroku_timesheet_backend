import { Application } from '../declarations';
import users from './users/users.service';
import contact from './contact/contact.service';
import profile from './profile/profile.service';
import chat from './chat/chat.service';
import message from './message/message.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(contact);
  app.configure(profile);
  app.configure(chat);
  app.configure(message);
}

import { MessagingProtocol } from '../classes/interfaces/messagingProtocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }
}

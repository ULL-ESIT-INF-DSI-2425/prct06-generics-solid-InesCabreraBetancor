export abstract class NotificationService<T> {
  abstract notify(message: string, recipient: T): void;
}

export class EmailService extends NotificationService<string> {
  notify(message: string, recipient: string): void {
    console.log(`Sending notification by email to ${recipient}: ${message}`);
  }
}

export class ShortMessageService extends NotificationService<string> {
  notify(message: string, recipient: string): void {
    console.log(`Sending notification by SMS to ${recipient}: ${message}`);
  }
}

export class PushNotificationService extends NotificationService<string> {
  notify(message: string, recipient: string): void {
    console.log(`Sending push notification to ${recipient}: ${message}`);
  }
}

export class Notifier<T> {
  constructor(private notificationService: NotificationService<T>) {}

  sendNotification(message: string, recipient: T): void {
    this.notificationService.notify(message, recipient);
  }
}


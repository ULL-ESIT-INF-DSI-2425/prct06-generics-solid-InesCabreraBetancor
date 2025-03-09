import { describe, it, expect, vi } from 'vitest';
import {EmailService, NotificationService, Notifier, ShortMessageService, PushNotificationService} from "../src/ejercicio-5";

// Ahora las pruebas unitarias con Vitest
describe('Notifier tests', () => {
  it('should send email notification correctly', () => {
    const emailServiceMock = vi.fn();
    const emailService = new EmailService();
    vi.spyOn(emailService, 'notify').mockImplementation(emailServiceMock);
    
    const notifier = new Notifier(emailService);
    notifier.sendNotification('Hello World!', 'user@example.com');
    
    expect(emailServiceMock).toHaveBeenCalledWith('Hello World!', 'user@example.com');
  });

  it('should send SMS notification correctly', () => {
    const smsServiceMock = vi.fn();
    const smsService = new ShortMessageService();
    vi.spyOn(smsService, 'notify').mockImplementation(smsServiceMock);
    
    const notifier = new Notifier(smsService);
    notifier.sendNotification('Hello World!', 'user@example.com');
    
    expect(smsServiceMock).toHaveBeenCalledWith('Hello World!', 'user@example.com');
  });

  it('should send push notification correctly', () => {
    const pushServiceMock = vi.fn();
    const pushService = new PushNotificationService();
    vi.spyOn(pushService, 'notify').mockImplementation(pushServiceMock);
    
    const notifier = new Notifier(pushService);
    notifier.sendNotification('Hello World!', 'user@example.com');
    
    expect(pushServiceMock).toHaveBeenCalledWith('Hello World!', 'user@example.com');
  });
});

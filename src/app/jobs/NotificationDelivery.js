import Couries from '../models/Courier';

class NotificationDelivery {
  get key() {
    return 'NotificationDelivery';
  }

  async handle({ data }) {}
}
export default new NotificationDelivery();

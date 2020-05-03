import DeliveryMan from '../models/DeliveryMan';

class NotificationDelivery {
  get key() {
    return 'NotificationDelivery';
  }

  async handle({ data }) {
    const { company } = data;
  }
}
export default new NotificationDelivery();

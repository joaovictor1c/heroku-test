class NotificationDelivery {
  get key() {
    return 'NotificationDelivery';
  }

  async handle({ data }) {
    const { company } = data;
    await Mail.sendMail({});
  }
}
export default new NotificationDelivery();

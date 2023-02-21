const {
  createSubscription,
  deleteSubscriptionById,
  getSubscriptionById,
  getSubscriptions,
} = require("./subscription");
const subscriptionModel = require("../model/subscription");
const mockingoose = require("mockingoose");

describe("Subscription test", () => {
  const mockSubscription1 = {
    _id: "63f52ca75142e2c8378c0923",
    email: "testEmail@gmail.com",
    firstName: "Agustin",
    gender: "Male",
    birthDate: "18/08/1995",
    consent: true,
    newsletterId: "1",
  };

  const mockSubscription2 = {
    _id: "56783ca75142e2c8378c050",
    email: "testEmail2@company.com",
    firstName: "Juan",
    gender: "Male",
    birthDate: "20/01/2001",
    consent: true,
    newsletterId: "2",
  };

  describe("/GET subscriptions", () => {
    beforeEach(() => {
      mockingoose(subscriptionModel).toReturn(
        [mockSubscription1, mockSubscription2],
        "find"
      );
    });

    afterEach(() => {
      mockingoose.resetAll();
    });

    it("Should get all the subscriptions and return them", async () => {
      const obtainedSubscriptions = await getSubscriptions();

      expect(obtainedSubscriptions.length).toBe(2);
      expect(obtainedSubscriptions[0].firstName).toBe(
        mockSubscription1.firstName
      );
    });
  });

  describe("/GET subscription", () => {
    beforeEach(() => {
      mockingoose(subscriptionModel).toReturn(mockSubscription1, "findOne");
    });

    afterEach(() => {
      mockingoose.resetAll();
    });

    it("Should get a single subscription and return it", async () => {
      const obtainedSubscription = await getSubscriptionById(
        mockSubscription1._id
      );

      expect(obtainedSubscription.firstName).toBe(mockSubscription1.firstName);
    });
  });

  describe("/DELETE subscription", () => {
    beforeEach(() => {
      mockingoose(subscriptionModel).toReturn(
        [mockSubscription1, mockSubscription2],
        "find"
      );

      mockingoose(subscriptionModel).toReturn("", "findByIdAndRemove");
      mockingoose(subscriptionModel).toReturn([mockSubscription2], "find");
    });

    afterEach(() => {
      mockingoose.resetAll();
    });
    it("Should delete a subscription and return the list without that one", async () => {
      await deleteSubscriptionById(mockSubscription1._id);

      const obtainedSubscriptionsUpdated = await getSubscriptions();
      expect(obtainedSubscriptionsUpdated.length).toBe(1);
    });
  });
});

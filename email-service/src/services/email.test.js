const { sendEmail } = require("./email");

describe("Email test", () => {
  it("Should send a email message and return", async () => {
    const testRecipient = { recipient: "test" };
    expect(await sendEmail(testRecipient)).toBe("Email sent to test");
  });
});

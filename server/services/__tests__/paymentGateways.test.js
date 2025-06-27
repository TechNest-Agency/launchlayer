const paymentGatewayService = require('../paymentGateways');

describe('PaymentGatewayService', () => {
  it('should throw error for missing payment data', async () => {
    await expect(paymentGatewayService.processPayoneerPayment({})).rejects.toThrow();
    await expect(paymentGatewayService.processBkashPayment({})).rejects.toThrow();
    await expect(paymentGatewayService.processNagadPayment({})).rejects.toThrow();
    await expect(paymentGatewayService.processBinancePayment({})).rejects.toThrow();
    await expect(paymentGatewayService.processBankTransfer({})).rejects.toThrow();
  });

  // Mocked test for verifyPayment fallback
  it('should return mock verification for unknown gateway', async () => {
    const result = await paymentGatewayService.verifyPayment('unknown', 'mock-id');
    expect(result.status).toBe('completed');
    expect(result.transactionId).toBe('mock-id');
  });

  // You can add more tests for each gateway using jest.mock or nock for API mocking
});

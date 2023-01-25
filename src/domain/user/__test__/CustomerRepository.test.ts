import { UserRepository } from "../../../domain/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";

describe("CustomerRepository validation", () => {
  const customerRepository = new UserRepository();
  //TODO: validate created user on database
  it("should return the new customer inserted into database, when CustomerRepository is called", () => {
    const result = customerRepository.createUser(userMock);
    expect(result).toBeTruthy();
    expect(result).toEqual(userMock);
  });
});

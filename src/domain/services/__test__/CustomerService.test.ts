import { UserRepository } from "../../../domain/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";
import { CreateUserService } from "../UserService";

describe("CustomerService validation", () => {
  const customerRepository = new UserRepository();
  const customerService = new CreateUserService(customerRepository);
  it("should create a new user when function is called", () => {
    const spyCustomerRepository = jest
      .spyOn(UserRepository.prototype, "createUser")
      .mockReturnValueOnce(userMock);

    const result = customerService.execute(userMock);

    expect(result).toBeTruthy();
    expect(spyCustomerRepository).toHaveBeenCalled();
  });
});

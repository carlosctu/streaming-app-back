// Vantagens do DI
// Testabilidade: Podemos substituir componentes pesados de infraestrutura por componentes fictícios durante o teste.
// Substituibilidade: Se programarmos em uma interface, habilitamos uma arquitetura de plug-and-play que adere ao Princípio de Substituição de Liskov, o que torna incrivelmente fácil trocar componentes válidos e programar em código que ainda não existe. Como a interface define a forma da dependência, tudo o que precisamos fazer para substituir a dependência atual é criar uma nova que siga o contrato definido pela interface. Veja este artigo para se aprofundar nisso.
// Flexibilidade: Seguindo o Princípio de Aberto e Fechado, um sistema deve ser aberto para extensão, mas fechado para modificação. Isso significa que se quisermos estender o sistema, precisamos apenas criar um novo plugin para estender o comportamento atual.
// Delegação: Inversão de Controle é o fenômeno que observamos quando delegamos comportamento para ser implementado por outra pessoa, mas fornecemos os hooks / plug-ins / callbacks para isso acontecer. Projetamos o componente atual para inverter o controle para outro. Muitos frameworks da web são construídos com base neste princípio.

export const tokens = {
  //Presentation
  MainRouter: Symbol("MainRouter"),
  UserRouter: Symbol("UserRouter"),

  //Application
  ControllerAdapter: Symbol("ControllerAdapter"),
  CreateUserController: Symbol("CreateUserController"),
  ListUsersController: Symbol("ListUsersController"),
  UpdateUserController: Symbol("UpdateUserController"),
  DeleteUserController: Symbol("DeleteUserController"),

  //Domain
  UserService: Symbol("UserService"),

  //Persistence:
  UserRepository: Symbol("UserRepository"),

  //Infrastucture:
  DatabaseClient: Symbol("DatabaseClient"),
};

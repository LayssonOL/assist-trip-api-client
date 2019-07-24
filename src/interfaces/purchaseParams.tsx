export default interface IPurchaseParams {
    external_id: number,
    plan_id: number,
    coverage_begin: string,
    coverage_end: string,
    destination_id: number,
    contact: {
      name: string,
      email: string,
      phone: string
    },
    address: {
      address: string,
      cep: string,
      city: string,
      state: string
    },
    insureds: [
      {
        external_id: number,
        first_name: string,
        last_name: string,
        date_of_birth: string,
        cpf: string
      }
    ]
}
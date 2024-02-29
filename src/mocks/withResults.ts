import { faker } from '@faker-js/faker'
import { useCallback, useState } from 'react'
import {ExpenseInterface} from "../interfaces/ExpensesInterface.ts";
import {TypeEnum} from "../interfaces/Enums.ts";
export function useExpenses () {
  const [expenses, setExpenses] =
      useState<ExpenseInterface[]>([])

  const getExpenses = useCallback(() => {
    const newExpenses : ExpenseInterface[] = faker.helpers.multiple(generateExpenses, {
      count: 10
    })
    setExpenses(newExpenses)
  }, [])

  console.log(faker.helpers.multiple(generateExpenses, {
    count: 50
  }))

  return { expenses, getExpenses }
}

const getTypeFromEnum = () => {
  const typeFromEnum: any = faker.helpers.arrayElement(['Income', 'Outcome'])
  console.log(TypeEnum[typeFromEnum])
  return TypeEnum[typeFromEnum]
}

const generateExpenses = () => {
  console.log('generating')
  return {
    id: faker.string.uuid(),
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: faker.string.uuid(),
      date: faker.date.betweens({ from: '2024-01-01', to: '2024-02-28', count: 1 })[0]
        .toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
      type: getTypeFromEnum(),
      amount: parseFloat(faker.finance.amount({ min: 0.99, max: 100, dec: 2 })),
      description: faker.finance.transactionType(),
      accountName: faker.finance.accountName(),
      user: 'user123'
    }
  }
}

export const RESULTS = [
  {
    "id": "5996b5ff-b481-4a52-afb4-d44108b902d1",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "ddd0d461-0954-417c-989b-52dc960ae378",
      "date": "February 22",
      "type": "Outcome",
      "amount": 2.56,
      "description": "invoice",
      "accountName": "Monkey",
      "user": "user123"
    }
  },
  {
    "id": "093a43e8-be0b-4cbb-a6bc-47beddd28280",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "56a45f46-b6b6-412f-9501-e4566c6e7007",
      "date": "January 4",
      "type": "Income",
      "amount": 75.71,
      "description": "deposit",
      "accountName": "Money Market Account",
      "user": "user123"
    }
  },
  {
    "id": "f9b87df0-0733-4c79-a056-a3f64110ecff",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "74e2aa5a-6290-4bfa-b885-f3a2d87070ac",
      "date": "February 4",
      "type": "Income",
      "amount": 23.7,
      "description": "withdrawal",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "4cb1e3e1-17f2-4239-a0f2-e573db09a340",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "ec150904-41a6-48e5-a462-66faf499cb81",
      "date": "February 17",
      "type": "Outcome",
      "amount": 83.37,
      "description": "invoice",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "175d024c-a5fa-46e9-9ef0-f92f954a2632",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "77df63a2-e8f8-4769-9c70-3c8d6eff4e66",
      "date": "February 21",
      "type": "Outcome",
      "amount": 96.27,
      "description": "withdrawal",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "001d77f6-5f39-42d0-9a5a-3540c415487a",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "08367dcc-3ced-4ea8-b88d-a5dfe77729f8",
      "date": "February 25",
      "type": "Outcome",
      "amount": 13.53,
      "description": "deposit",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "96afa01c-59a5-4c37-bc16-1ec79b862993",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "14b5e399-1e38-44d5-be8c-650670d50b59",
      "date": "January 25",
      "type": "Outcome",
      "amount": 8.54,
      "description": "invoice",
      "accountName": "Investment Account",
      "user": "user123"
    }
  },
  {
    "id": "ecae4fd7-0a41-41e5-bf29-a37301ccbadf",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "59b35024-e4fd-410d-ba52-4a3c26315590",
      "date": "February 10",
      "type": "Income",
      "amount": 90.76,
      "description": "payment",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "25ee482c-889c-40d7-950e-9ca1013fdd34",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "72685785-3f7a-4396-9aae-5279b4d69504",
      "date": "February 3",
      "type": "Income",
      "amount": 41.57,
      "description": "withdrawal",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "6d3296f4-ef47-4b85-856f-4f3a72d8c920",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "bb851690-da80-4413-999d-499a4d26dac2",
      "date": "January 3",
      "type": "Income",
      "amount": 70.09,
      "description": "withdrawal",
      "accountName": "Home Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "af4c9603-6cdd-4ad6-b942-680554a1e4d4",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "df9c1096-a0f1-4f8e-8c8c-e2788a3b749b",
      "date": "January 19",
      "type": "Income",
      "amount": 26.8,
      "description": "deposit",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "285cb77a-4fa9-4b6e-a30f-9cb01b8e84d7",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "be22db48-25b0-420f-a84f-0106de96f0ec",
      "date": "January 4",
      "type": "Outcome",
      "amount": 62.41,
      "description": "deposit",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "ae70c18e-3157-4faa-a4ae-3f80df2f3143",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "55567138-dfc9-430b-9610-07204d717da5",
      "date": "January 14",
      "type": "Income",
      "amount": 36.5,
      "description": "deposit",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "5d304a81-a181-4d16-9d23-50d0acd579bf",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "8bfdf528-ea9d-462d-b484-d77400fbba98",
      "date": "January 26",
      "type": "Income",
      "amount": 87.4,
      "description": "invoice",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "963ed381-afdd-411f-9097-72f8d0d15090",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "173f8627-f8d8-4842-b364-a17274c9c0ae",
      "date": "January 3",
      "type": "Outcome",
      "amount": 23.79,
      "description": "deposit",
      "accountName": "Money Market Account",
      "user": "user123"
    }
  },
  {
    "id": "a1e52889-e23f-4696-ab6c-44e183049469",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "d5e83a9d-8dcc-4cbd-a1c6-8dfaf7a67312",
      "date": "January 3",
      "type": "Income",
      "amount": 41.96,
      "description": "deposit",
      "accountName": "Investment Account",
      "user": "user123"
    }
  },
  {
    "id": "1817fac3-5ba4-432c-88df-1de9f1fa6c73",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "e1c16378-7d82-42ad-a8db-cbda16f3e91d",
      "date": "January 24",
      "type": "Outcome",
      "amount": 3.42,
      "description": "deposit",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "80b36471-be08-4d12-9bb8-6d7292859d8a",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "c7ae559d-6e2f-4975-974a-678310bc83e9",
      "date": "February 26",
      "type": "Income",
      "amount": 58.59,
      "description": "withdrawal",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "e8ccd616-24ba-4938-8a00-091470af8dc3",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "c401455a-51ed-4db6-9eb3-683ed39b9f5b",
      "date": "January 27",
      "type": "Outcome",
      "amount": 20.81,
      "description": "payment",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "90d0e4ee-390b-4ee8-a527-75accf893b1c",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "65ae120a-93f7-40bd-af08-076674507cc5",
      "date": "January 14",
      "type": "Outcome",
      "amount": 35.81,
      "description": "payment",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "93f51c77-be37-48cd-84e4-33c6bf6da281",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "53e01b03-1668-4b6d-a9a3-35d81ac1cdd8",
      "date": "February 4",
      "type": "Income",
      "amount": 19.9,
      "description": "invoice",
      "accountName": "Home Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "d6c6c69a-53bc-4c47-b764-e38f561dd15c",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "f9ad00c6-4016-4385-9c07-9481a5eaa1cb",
      "date": "February 14",
      "type": "Outcome",
      "amount": 24.5,
      "description": "invoice",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "6949e477-cb51-45c2-a365-79d9ce597bc3",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "f8b30a4f-d6a7-4bdf-bb8e-8cef975b8d3b",
      "date": "January 4",
      "type": "Outcome",
      "amount": 20.67,
      "description": "deposit",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "309c867f-8a46-45c3-a849-02e982ca8259",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "cef415cd-bbfd-4dee-b68c-4b9a4c93984a",
      "date": "February 13",
      "type": "Outcome",
      "amount": 46.27,
      "description": "deposit",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "ae552c59-be66-44ab-a482-182bbd2876c0",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "71d2c08e-6fdf-4377-a94f-620ecf9ec64f",
      "date": "February 6",
      "type": "Income",
      "amount": 74.63,
      "description": "deposit",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "1a02882c-d0c7-453f-af9d-e5beb6f854b3",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "4bebb152-2f73-4e55-8b5e-7805840997e4",
      "date": "February 15",
      "type": "Outcome",
      "amount": 14.37,
      "description": "payment",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "faaf1865-0de8-473a-867a-ad8d3306347b",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "fcbe45f4-3aeb-4a26-825f-23d947ce4dcb",
      "date": "February 19",
      "type": "Income",
      "amount": 75.86,
      "description": "payment",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "805c6552-d98b-4884-b044-bb9b97142ac7",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "dcf5ef27-5c40-43dd-bbb8-c1d5b1677da8",
      "date": "January 27",
      "type": "Income",
      "amount": 80.35,
      "description": "withdrawal",
      "accountName": "Money Market Account",
      "user": "user123"
    }
  },
  {
    "id": "0dc58de4-012e-4686-b10b-395c3ff460b2",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "16da4193-64b3-4c56-b4fd-98a6cedad1e2",
      "date": "January 23",
      "type": "Outcome",
      "amount": 92.76,
      "description": "invoice",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "52bf61ca-691e-4f4c-9356-f093bed37e49",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "06eed51f-a6e1-4858-9453-60b18afc8573",
      "date": "January 11",
      "type": "Income",
      "amount": 79.01,
      "description": "payment",
      "accountName": "Investment Account",
      "user": "user123"
    }
  },
  {
    "id": "e9f59cdd-d38d-4ede-a6b7-35c65f48db1e",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "96065f26-879f-442d-b79f-a2925df8f95e",
      "date": "February 9",
      "type": "Income",
      "amount": 24.89,
      "description": "deposit",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "80afddc8-07a2-4b94-9e0a-3d2e67350c97",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "d1a21f01-7106-481c-bf29-c7dbf24db721",
      "date": "January 3",
      "type": "Income",
      "amount": 19.64,
      "description": "withdrawal",
      "accountName": "Money Market Account",
      "user": "user123"
    }
  },
  {
    "id": "7ab09fe0-29e0-430c-9882-4b600fb0ba52",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "c4c07819-dd82-4656-a4bc-a8d47ce8734b",
      "date": "February 6",
      "type": "Income",
      "amount": 15.47,
      "description": "invoice",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "79b82750-40d9-46d6-b65f-5879ae434d7b",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "91d7f84f-a8bb-4dc7-85a7-79ac85831518",
      "date": "February 8",
      "type": "Outcome",
      "amount": 53.23,
      "description": "withdrawal",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "4d95e734-7c72-4823-9110-57dbd4831a73",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "d2bdeed0-d088-4dfb-9520-3cd03d2bf2c9",
      "date": "January 18",
      "type": "Outcome",
      "amount": 49.47,
      "description": "deposit",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "c6353653-a74f-400b-850b-bbd82fcb2971",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "0c425b88-7e2f-49a1-944b-6ec6202d4022",
      "date": "February 8",
      "type": "Outcome",
      "amount": 21.02,
      "description": "withdrawal",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "f7f38de8-e752-4066-b398-6f6b53a2e3f2",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "5ad19662-9704-41bb-85c3-74fd22ce3ee0",
      "date": "January 18",
      "type": "Outcome",
      "amount": 28.46,
      "description": "deposit",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "f6ac1932-ab77-4100-8788-6740e914b292",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "79a5a686-081e-44ab-960b-be1be49b9d86",
      "date": "January 31",
      "type": "Outcome",
      "amount": 77.13,
      "description": "deposit",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "90585265-48d0-4ca5-816d-769f907d5a1b",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "498921de-0962-42f8-93ff-6d12affa87a0",
      "date": "January 9",
      "type": "Income",
      "amount": 39.5,
      "description": "invoice",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "5680f07e-3344-4231-8f10-65a2045d3f54",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "1b474aed-8de5-4c4f-adf1-726922683a66",
      "date": "January 3",
      "type": "Income",
      "amount": 6.22,
      "description": "invoice",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "4d447422-12aa-4045-a64b-d601cc4530f1",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "690469d3-79d0-4a19-a0c4-f814988bf6ef",
      "date": "January 22",
      "type": "Income",
      "amount": 97.03,
      "description": "deposit",
      "accountName": "Checking Account",
      "user": "user123"
    }
  },
  {
    "id": "e696b493-06ca-44e8-9bd5-9728ba2b20b6",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "05c6ca64-b1c8-414c-81e9-4097b61fe048",
      "date": "February 25",
      "type": "Income",
      "amount": 68.68,
      "description": "withdrawal",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "2831a1b6-b047-43ca-ac32-070eeac00b5d",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "ec908e89-270e-4448-aa42-c29169d12f7b",
      "date": "February 6",
      "type": "Outcome",
      "amount": 52.6,
      "description": "withdrawal",
      "accountName": "Credit Card Account",
      "user": "user123"
    }
  },
  {
    "id": "8986a582-c6bd-4e3e-8106-6b139abc47e8",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "2279bc6d-413f-4f13-8c17-969848480c18",
      "date": "January 21",
      "type": "Outcome",
      "amount": 30.04,
      "description": "withdrawal",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "33b2b58d-0504-44a3-8729-0d75c6e72c80",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "b05fbab0-4eff-4cb0-ab62-d8019ac41df2",
      "date": "February 14",
      "type": "Income",
      "amount": 19.9,
      "description": "withdrawal",
      "accountName": "Investment Account",
      "user": "user123"
    }
  },
  {
    "id": "8d8d88d4-74e3-4530-89dc-974c8e8a2208",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "ef2fe11a-714e-4b4a-b96f-ad91a7f2328f",
      "date": "January 1",
      "type": "Outcome",
      "amount": 28.97,
      "description": "payment",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "bd2349a5-4252-4793-b874-c5e1101d4a77",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "9754b308-4e7a-4544-99fd-b4b0f8fda52d",
      "date": "January 22",
      "type": "Outcome",
      "amount": 82.6,
      "description": "payment",
      "accountName": "Auto Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "de76a813-a643-4aa7-a6ad-98d14c024add",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "54d3d27a-59bf-41b5-abf8-d37315fa0215",
      "date": "February 11",
      "type": "Outcome",
      "amount": 23.55,
      "description": "invoice",
      "accountName": "Personal Loan Account",
      "user": "user123"
    }
  },
  {
    "id": "e6844d4b-1bee-4d3e-bad8-2e14e94f2118",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "f7df7696-a624-4edd-980f-fb02f9d3ce4d",
      "date": "February 11",
      "type": "Income",
      "amount": 81.54,
      "description": "deposit",
      "accountName": "Savings Account",
      "user": "user123"
    }
  },
  {
    "id": "a25e738a-294f-46f7-ad1d-c0712c4e565f",
    "status": "success",
    "message": "Gasto registrado exitosamente",
    "data": {
      "expenseId": "52a330dd-a0fb-4b52-89e2-5ab47cb14dc7",
      "date": "February 22",
      "type": "Outcome",
      "amount": 64.96,
      "description": "withdrawal",
      "accountName": "Savings Account",
      "user": "user123"
    }
  }
]

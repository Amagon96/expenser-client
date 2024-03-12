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
        .toLocaleDateString('default', {month: '2-digit', day: '2-digit', year: 'numeric'}),
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
      "id": "caea81ba-c5f1-4553-b0a9-a34f5338f1af",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "ea3afc97-00cd-4207-a110-3b7b495e6b2c",
          "date": "15/01/2024",
          "type": "income",
          "amount": 77.54,
          "description": "invoice",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "9dc0a5e6-0074-4427-b0cf-7cc8f1c00b9e",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "6664a906-6b41-40a7-9399-1965aa72d3c3",
          "date": "11/02/2024",
          "type": "outcome",
          "amount": 87.03,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "98695175-d6ce-4c8f-b530-bbbf2c2c5664",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "46b40b14-4ae5-4256-a138-d1b85d89736c",
          "date": "08/02/2024",
          "type": "income",
          "amount": 90.77,
          "description": "deposit",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "a1303848-5e9c-4d2b-afb6-3731c36772da",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "af2f0b23-76e2-4d2c-adc8-7611c9e6683d",
          "date": "04/02/2024",
          "type": "income",
          "amount": 64.35,
          "description": "invoice",
          "accountName": "Personal Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "2e73ac02-0054-42a2-8fcd-617b85d68695",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "1a3d6ac6-faab-472f-96fd-a6fe465e5490",
          "date": "12/01/2024",
          "type": "outcome",
          "amount": 33.62,
          "description": "invoice",
          "accountName": "Personal Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "4854c383-3043-45fc-9ebc-df9cf865a86f",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "d02a8d57-c06b-4f19-9d5b-e20b07efad5d",
          "date": "06/02/2024",
          "type": "outcome",
          "amount": 4.11,
          "description": "withdrawal",
          "accountName": "Checking Account",
          "user": "user123"
      }
  },
  {
      "id": "c8751220-e403-4334-b620-17bf7b90569a",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "89f4bc54-a955-4eaf-8a5f-4d2cd92314e5",
          "date": "11/02/2024",
          "type": "outcome",
          "amount": 63.42,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "1bb7de97-f3ba-422d-a41e-3d7a9bbc78bf",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "1d9ba058-0e3b-43f6-8249-13370a2a0e80",
          "date": "10/01/2024",
          "type": "outcome",
          "amount": 24.61,
          "description": "deposit",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "d3e21181-f1c0-4b75-8913-fd7d50f7b896",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "0d57ae21-6588-4d34-b944-6dec15249cb1",
          "date": "21/01/2024",
          "type": "income",
          "amount": 74.27,
          "description": "deposit",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "72513e0c-4a51-4b4f-b59b-42a0d78156af",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "1ab5a283-f3fb-4071-a105-b0e84c740a7c",
          "date": "12/02/2024",
          "type": "outcome",
          "amount": 90.41,
          "description": "payment",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "505cb862-be19-43b2-abbf-016407f9b7d4",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "e27b8e26-9fee-4ba3-ad13-3b793521744d",
          "date": "24/01/2024",
          "type": "income",
          "amount": 74.23,
          "description": "withdrawal",
          "accountName": "Checking Account",
          "user": "user123"
      }
  },
  {
      "id": "8737f413-903e-4277-8c23-626243627850",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "69b734c8-159d-4054-9bd1-974bfab4d97c",
          "date": "05/01/2024",
          "type": "outcome",
          "amount": 61.32,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "2de4c607-ff03-447d-94b0-40669ebb7693",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "0c1a6a2f-4f9a-42cc-ad90-37a7f6c80e9b",
          "date": "10/01/2024",
          "type": "income",
          "amount": 74.75,
          "description": "payment",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "18a1de05-b632-46e0-bfd6-171623be5e5c",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "32961a49-de69-4bc5-8cd1-76552a9f6376",
          "date": "19/01/2024",
          "type": "income",
          "amount": 20.75,
          "description": "payment",
          "accountName": "Personal Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "c2f7f8bf-37fa-4ae4-854c-3aa21eff2b85",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "b2324c53-dcfa-41bd-a12c-55a02967af02",
          "date": "26/01/2024",
          "type": "income",
          "amount": 9.55,
          "description": "payment",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "00652e98-7b53-4d9b-b1f2-5197aba73f9c",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "d052fad1-2d27-4ebe-a4f0-696cfcc9e0a9",
          "date": "03/01/2024",
          "type": "income",
          "amount": 24.22,
          "description": "deposit",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "638d5542-5a58-437b-89ae-ecfaf9d40cda",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "4e60039d-a500-4757-8489-6124bdc67737",
          "date": "25/01/2024",
          "type": "outcome",
          "amount": 50.7,
          "description": "deposit",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "e42b3f10-76d1-4aca-aa60-e80c5c14dfbf",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "b56a7670-4caa-4302-9949-7bef2e81094b",
          "date": "20/01/2024",
          "type": "outcome",
          "amount": 44.44,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "c96aedd0-cc28-4a9e-96cf-31d24bdb12bc",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "c6707f5b-19fe-4559-85c5-1f8e1db689f6",
          "date": "04/01/2024",
          "type": "outcome",
          "amount": 27.6,
          "description": "withdrawal",
          "accountName": "Savings Account",
          "user": "user123"
      }
  },
  {
      "id": "fee72051-c714-4024-bcdd-caa203743111",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "361e6553-9746-4286-917a-e320fe1102c6",
          "date": "09/01/2024",
          "type": "outcome",
          "amount": 58.67,
          "description": "payment",
          "accountName": "Checking Account",
          "user": "user123"
      }
  },
  {
      "id": "583cf331-5984-48dc-b6c1-7456b31d17b2",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "c5616f5b-b959-43f7-a642-1d27acb8f66c",
          "date": "25/02/2024",
          "type": "outcome",
          "amount": 9.47,
          "description": "deposit",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "9f2f9550-1ffc-4438-9154-fff4bf1126c2",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "febbe30b-2f49-4a80-83f2-c242cf9d1c8a",
          "date": "17/01/2024",
          "type": "outcome",
          "amount": 65.4,
          "description": "withdrawal",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "2a7ea531-608f-4d2f-b065-261b0d466c44",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "0340241b-22d1-4739-8ef6-5f53d2b35dab",
          "date": "04/01/2024",
          "type": "outcome",
          "amount": 73.03,
          "description": "invoice",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "a22c645d-8dda-4dc8-8b1d-d8c329f342d4",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "7fc30b65-c06d-4024-8298-34d9ed3f8718",
          "date": "03/01/2024",
          "type": "outcome",
          "amount": 86.32,
          "description": "deposit",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "45f23605-00e0-414e-af50-4fa4c68e02c9",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "452b0d8d-0510-4ef8-a61c-9ae598274aef",
          "date": "10/01/2024",
          "type": "outcome",
          "amount": 24.09,
          "description": "withdrawal",
          "accountName": "Savings Account",
          "user": "user123"
      }
  },
  {
      "id": "f534818d-1837-403b-a21f-3765aff15112",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "fa328b85-69fe-4da1-9fab-d0b536c349a1",
          "date": "20/02/2024",
          "type": "outcome",
          "amount": 24.11,
          "description": "deposit",
          "accountName": "Personal Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "efe6a811-0e83-4400-93ef-c74b91cd08a7",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "a7e6ce2a-fd6c-4f4e-97e7-af44dbc01451",
          "date": "20/01/2024",
          "type": "outcome",
          "amount": 46.04,
          "description": "invoice",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "0702974d-68b0-4223-a07d-0298de2da7cb",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "b8f24ca4-db2d-4367-9b9e-a712ecd27a90",
          "date": "27/01/2024",
          "type": "income",
          "amount": 53.36,
          "description": "deposit",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "dff06d9a-0449-4c02-adaa-8fb76df2c7c9",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "18f3dc9c-03d7-4513-be2b-7597fa4b0971",
          "date": "26/02/2024",
          "type": "outcome",
          "amount": 74.41,
          "description": "deposit",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "871a1bd5-0096-4702-8df7-a92132eaec1a",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "055a1fdf-ee18-4956-ae9b-6e27c922255e",
          "date": "17/02/2024",
          "type": "outcome",
          "amount": 23.93,
          "description": "invoice",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "1cfc3f42-5c72-4045-97a8-756e895bc8e2",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "e5422b19-06d4-4c51-be7b-b9ffc0ee8aa6",
          "date": "03/02/2024",
          "type": "outcome",
          "amount": 61.43,
          "description": "withdrawal",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "5778b2b7-bf6b-4d8f-81dc-cb170b714176",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "9da959a4-2bab-4ad8-9715-41f5a9428f7a",
          "date": "15/01/2024",
          "type": "income",
          "amount": 43.92,
          "description": "payment",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "34f831ff-28b3-4b18-8df9-5d5d4523e7b4",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "40d6d13a-2071-4689-abbe-1f8bbc9df2d8",
          "date": "18/02/2024",
          "type": "outcome",
          "amount": 54.63,
          "description": "invoice",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "2b726576-fe18-4349-a882-5445999849d0",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "f5aeea49-1098-4632-8c97-8a04994ae5ed",
          "date": "04/01/2024",
          "type": "outcome",
          "amount": 30.85,
          "description": "invoice",
          "accountName": "Savings Account",
          "user": "user123"
      }
  },
  {
      "id": "172cfa4a-7f8c-4831-b32e-6375b4dccc98",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "33455b6f-df68-4f39-bbd5-bc1ae4fc7e0b",
          "date": "21/01/2024",
          "type": "outcome",
          "amount": 73.4,
          "description": "deposit",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "3d1d535c-126a-4128-a4be-ae0783ae679b",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "8df0b529-983a-4259-8b14-8a37047c7127",
          "date": "01/01/2024",
          "type": "outcome",
          "amount": 92.78,
          "description": "deposit",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "16cf2682-1c44-4f9f-8cb7-389c428e452d",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "d8a76c9c-55a5-4dc1-8965-b7c582527d9a",
          "date": "25/01/2024",
          "type": "outcome",
          "amount": 88.81,
          "description": "invoice",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "d12c7719-7d0a-42eb-9507-8ffeeaad4edd",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "1a1a6df3-40d9-4934-8200-032becc01b6b",
          "date": "30/01/2024",
          "type": "income",
          "amount": 11.04,
          "description": "withdrawal",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "024f0622-02b3-47e0-b7ce-e74d34d6ede3",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "c7ab1535-cae9-4a78-97a9-8840af6f8767",
          "date": "17/02/2024",
          "type": "income",
          "amount": 59.01,
          "description": "deposit",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "e4e7e9db-b030-4619-816a-f090cc5aedd2",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "ee9af444-4894-48d1-8a6c-ee5040f9af27",
          "date": "19/02/2024",
          "type": "outcome",
          "amount": 43.65,
          "description": "withdrawal",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "44930603-3df2-4573-b96c-f8def27e11aa",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "7ca984b7-404e-4fae-8fbb-93a52fa636a3",
          "date": "02/01/2024",
          "type": "outcome",
          "amount": 94.24,
          "description": "invoice",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "410e7c75-40b6-45cf-8e34-165f1ab0bd31",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "349d5115-c149-48c5-8dc9-2444d3985898",
          "date": "21/02/2024",
          "type": "outcome",
          "amount": 57.96,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "98f352a1-d701-42b5-ac14-6cba581462fe",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "a1630bd4-df78-4f0f-8495-f0b36ac3d2b4",
          "date": "03/02/2024",
          "type": "income",
          "amount": 43.46,
          "description": "invoice",
          "accountName": "Auto Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "913588aa-ff8e-413b-9ae8-78c11844d7c6",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "2506a25f-140a-470b-8f8b-a1cacbb8afb6",
          "date": "23/02/2024",
          "type": "outcome",
          "amount": 36.69,
          "description": "deposit",
          "accountName": "Credit Card Account",
          "user": "user123"
      }
  },
  {
      "id": "2c878435-38cb-4b9a-8bfc-d795df9b4418",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "391057ba-9930-4f3c-9ab8-a21048f5ab17",
          "date": "09/02/2024",
          "type": "income",
          "amount": 84.44,
          "description": "deposit",
          "accountName": "Savings Account",
          "user": "user123"
      }
  },
  {
      "id": "765a087a-e4fe-4d07-a32e-53a527250dcc",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "ea7ad2d2-5e23-4459-a48c-68712a52c4ae",
          "date": "31/01/2024",
          "type": "income",
          "amount": 31.4,
          "description": "deposit",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "49ec06bf-b3be-4874-8bbf-8847c56417a5",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "627066ad-ef76-4504-8392-7af9290e9bee",
          "date": "26/01/2024",
          "type": "outcome",
          "amount": 26.87,
          "description": "payment",
          "accountName": "Investment Account",
          "user": "user123"
      }
  },
  {
      "id": "c39cc7bd-e2c8-4a99-9674-a3a2d3ef9028",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "5e26123c-0b26-4537-9c22-9df98af4375f",
          "date": "27/02/2024",
          "type": "outcome",
          "amount": 90.46,
          "description": "payment",
          "accountName": "Money Market Account",
          "user": "user123"
      }
  },
  {
      "id": "72b7dca6-f935-4bb5-888c-2ced6c11b2b1",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "37097b2f-12f2-47d3-b6e6-77a2907b67dd",
          "date": "12/01/2024",
          "type": "outcome",
          "amount": 71.12,
          "description": "payment",
          "accountName": "Home Loan Account",
          "user": "user123"
      }
  },
  {
      "id": "b4c3db70-3913-4cc2-8e3f-2c49c6824b35",
      "status": "success",
      "message": "Gasto registrado exitosamente",
      "data": {
          "expenseId": "2dfd6046-a939-47af-bef5-b3ed7dc461a7",
          "date": "29/01/2024",
          "type": "outcome",
          "amount": 26.13,
          "description": "deposit",
          "accountName": "Savings Account",
          "user": "user123"
      }
  }
]

import { faker } from '@faker-js/faker'
import { useCallback, useState } from 'react'
export function useExpenses ({ refresh }) {
  const [expenses, setExpenses] = useState([])

  const getExpenses = useCallback(() => {
    const newExpenses = faker.helpers.multiple(generateExpenses, {
      count: 10
    })
    setExpenses(newExpenses)
  }, [])

  console.log(faker.helpers.multiple(generateExpenses, {
    count: 50
  }))

  return { expenses, getExpenses }
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
      type: faker.helpers.arrayElement(['Income', 'Outcome']),
      amount: faker.finance.amount({ min: 0.99, max: 100, dec: 2 }),
      description: faker.finance.transactionType(),
      accountName: faker.finance.accountName(),
      user: 'user123'
    }
  }
}

export const RESULTS = [
  {
    id: 'cb8ac4c5-0c72-4078-ad1a-210306f6c7cb',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '13b57f7b-0205-4eb7-8f17-40efb315d766',
      date: 'January 5',
      type: 'Outcome',
      amount: '75.57',
      description: 'withdrawal',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: '9080d7ba-41b6-42db-893c-921b2c746d8d',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '9c993e49-c909-4261-9aa8-230e8ebec270',
      date: 'February 16',
      type: 'Outcome',
      amount: '49.17',
      description: 'withdrawal',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: '8be564aa-f636-4742-8396-a71aa96261ec',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'cacfc84f-d7ac-430c-8870-73491a4e5c7f',
      date: 'January 4',
      type: 'Outcome',
      amount: '96.38',
      description: 'invoice',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: '7bf791d3-3d7c-43bc-8564-81f622e4cc77',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '4add5583-091d-427c-a35d-9a902f055a0e',
      date: 'February 26',
      type: 'Outcome',
      amount: '64.46',
      description: 'deposit',
      accountName: 'Wings Buffet',
      user: 'user123'
    }
  },
  {
    id: '9ca211ce-aca2-4062-a575-5577bae3756a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '816b4665-5db8-420c-b965-48f8a819e1be',
      date: 'February 4',
      type: 'Income',
      amount: '81.31',
      description: 'payment',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: '249173ad-2681-498a-828e-bfa428e11169',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '40a47b54-201f-472d-92df-d6bccf2810e6',
      date: 'January 12',
      type: 'Income',
      amount: '40.90',
      description: 'deposit',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: '93647f88-1205-49af-9e4f-5f019be8ad0f',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'e2b2390b-1e60-49c3-be51-90a0d925a7a6',
      date: 'January 14',
      type: 'Income',
      amount: '30.19',
      description: 'deposit',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '8f0c43b7-c721-4444-b76d-961eb5cc054d',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '0acfec79-bfff-4b02-8803-cd6532a25c59',
      date: 'February 13',
      type: 'Outcome',
      amount: '38.38',
      description: 'invoice',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'bac9bedc-a779-4934-998d-e11af554f349',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '7ef161b8-a14d-462a-a5de-6cedb6e85fac',
      date: 'February 5',
      type: 'Outcome',
      amount: '40.18',
      description: 'payment',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: '978d9d0b-6d07-4b78-a621-12f35ae4964a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '01dcecd0-859c-439d-9a9d-36e0c16da7a1',
      date: 'January 27',
      type: 'Outcome',
      amount: '85.68',
      description: 'payment',
      accountName: 'Credit Card Account',
      user: 'user123'
    }
  },
  {
    id: 'e886f24a-c5e4-45af-ab34-10d142ac93dc',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '33224ab3-c3b8-40d7-9be7-30241f272a8a',
      date: 'January 4',
      type: 'Outcome',
      amount: '42.67',
      description: 'invoice',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'f665ab76-cdce-49ad-8601-a007f4f80cf3',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '1a482fdc-07bb-403d-ba55-f6bfda04562c',
      date: 'February 2',
      type: 'Outcome',
      amount: '13.30',
      description: 'deposit',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: '77d232c9-eb0d-4afc-bb21-d1c66278f6ff',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '611120d6-6258-417b-83d1-be7d552f2c38',
      date: 'January 27',
      type: 'Income',
      amount: '41.03',
      description: 'payment',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'acf9666d-79ce-4b05-9ac4-043ff8c6020b',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '01878c74-fed3-4679-9da9-7e8707709d7e',
      date: 'February 19',
      type: 'Income',
      amount: '65.34',
      description: 'payment',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: '923e37ea-9b7f-4b44-a1b9-6face3688dfc',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '9e6d2dd0-518d-49a4-b480-f60ec23ea521',
      date: 'January 14',
      type: 'Income',
      amount: '13.62',
      description: 'invoice',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '4046d6f1-04a6-4266-a4a4-d7a9d1aba886',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '10a87476-2f11-4b09-9735-59285e175d43',
      date: 'February 9',
      type: 'Income',
      amount: '95.31',
      description: 'deposit',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: '7455dfb3-ba85-4f6d-859a-82aeb89acb78',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '631d73f6-cb55-41bf-b538-09563943f4dd',
      date: 'February 19',
      type: 'Outcome',
      amount: '9.29',
      description: 'invoice',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'd5bb282e-dc3e-40ea-94b0-9a2dcf4a997a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '33c55908-8c8e-4da2-a98f-c3abdbced6b2',
      date: 'January 29',
      type: 'Income',
      amount: '89.47',
      description: 'payment',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: 'f4fe2cdf-d38b-4d72-8581-7220b26e894f',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '8d8d2743-b06c-4a27-b8a3-564a47417096',
      date: 'January 12',
      type: 'Outcome',
      amount: '47.87',
      description: 'payment',
      accountName: 'Credit Card Account',
      user: 'user123'
    }
  },
  {
    id: 'cb3a63d3-7eab-4625-96ce-f0f8461b9aa6',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'c15b3789-c089-48b6-9805-067aabf7a7fc',
      date: 'January 27',
      type: 'Income',
      amount: '79.87',
      description: 'withdrawal',
      accountName: 'Credit Card Account',
      user: 'user123'
    }
  },
  {
    id: '79180b7a-30b4-4b81-90ac-a1889bef399c',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'ed494b12-bc76-40b7-9970-59b600100199',
      date: 'February 16',
      type: 'Income',
      amount: '62.62',
      description: 'withdrawal',
      accountName: 'Credit Card Account',
      user: 'user123'
    }
  },
  {
    id: '00c85037-7911-4c1d-b043-3e2da4d7e31d',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '87c9dd8e-a96c-46ee-88dc-27e957419ef4',
      date: 'January 16',
      type: 'Income',
      amount: '39.01',
      description: 'deposit',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: 'aa3735a2-5b32-443b-b13d-96ee7041370a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '75d67377-a52f-49ad-a585-36e34680adba',
      date: 'February 24',
      type: 'Outcome',
      amount: '79.18',
      description: 'payment',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: 'f43e4d70-69b4-4483-a856-4adb1e15ed9b',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'd643d134-8258-4049-970b-113e750e8c63',
      date: 'February 23',
      type: 'Outcome',
      amount: '12.11',
      description: 'payment',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: '45f86c6f-f225-4612-8e2e-e9704d0df2cc',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'f6da266a-ed0b-47f6-b8cf-4078a4f7bca6',
      date: 'February 22',
      type: 'Income',
      amount: '30.53',
      description: 'payment',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: 'f116e248-cd00-4a86-a4a1-2356ba9b7d5a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'ee01d089-b04e-434f-b033-740174595417',
      date: 'January 16',
      type: 'Outcome',
      amount: '68.13',
      description: 'deposit',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: '27f0cdc2-bdd0-4fd0-8993-283960fd3a98',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '731c8d39-b6aa-471d-8749-7e5cf146beda',
      date: 'February 15',
      type: 'Income',
      amount: '62.83',
      description: 'payment',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'c88e9b19-3d69-4c7c-88db-c52d0df30166',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '0a5d47bc-f0c4-4a55-8615-224a1eea4d8d',
      date: 'February 13',
      type: 'Outcome',
      amount: '26.85',
      description: 'withdrawal',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: 'd5d068ae-8d3e-4194-b7f2-6264333c4569',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '358db9ee-c475-4a41-bd91-82ddf05287e6',
      date: 'February 19',
      type: 'Income',
      amount: '43.01',
      description: 'withdrawal',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '1156dda4-84e1-4651-85c1-d0dd681f861b',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '1cbbaea1-3bd6-46d4-a13c-30ee953efd03',
      date: 'January 20',
      type: 'Income',
      amount: '45.16',
      description: 'deposit',
      accountName: 'Credit Card Account',
      user: 'user123'
    }
  },
  {
    id: 'adca840c-22ef-4582-91d2-b4f4b9a49c09',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '254600cb-e204-479e-bab5-65851744f985',
      date: 'February 1',
      type: 'Income',
      amount: '44.30',
      description: 'deposit',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '7a884fcd-47ee-4087-b0b3-b5184d7cc3c3',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '8b468ac1-d30b-473c-96c5-8a786747dd6f',
      date: 'February 14',
      type: 'Outcome',
      amount: '22.22',
      description: 'deposit',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'a3859caf-0a4d-460f-b596-3a08b2677c37',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '8828b142-7541-4215-9578-d0a36c9d43a9',
      date: 'February 9',
      type: 'Income',
      amount: '29.04',
      description: 'invoice',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: '2aee9e86-da97-442d-b170-887df5b9b877',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '136aad9e-a394-48d0-ae77-d13a6fb80fb3',
      date: 'January 28',
      type: 'Outcome',
      amount: '64.39',
      description: 'invoice',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: 'be10a32b-c0d1-4491-afda-c2ff93e5342e',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '93e4a63b-d394-4f92-ac3f-b035b84ab0fd',
      date: 'February 7',
      type: 'Outcome',
      amount: '18.79',
      description: 'payment',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: '394f0a7a-ca0e-4823-bac0-aa26f66d677d',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '7bb7c925-9fab-41e4-b0cb-afa6757a5234',
      date: 'January 14',
      type: 'Income',
      amount: '34.79',
      description: 'invoice',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: '42fd610f-8dc5-4270-ac50-dc2e8d5f0854',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '21a42513-030f-4d9d-83c0-3cc894471425',
      date: 'January 3',
      type: 'Income',
      amount: '33.27',
      description: 'withdrawal',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '8815f2c5-82e9-4269-9499-d0d0ec315cdc',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'bf6d28a9-cdf0-48bc-ac90-2721b2e6a747',
      date: 'January 20',
      type: 'Income',
      amount: '29.96',
      description: 'deposit',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: '72b9a44e-a3a9-4588-8da1-c7112ed1311d',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'ba37b1b7-2e87-4e5f-84b4-a04bac2fc9bc',
      date: 'January 6',
      type: 'Outcome',
      amount: '59.86',
      description: 'invoice',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: 'b7967268-780f-43dc-8ab2-51e7cd003cb6',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '0e8aa6e8-9e32-4b0b-9661-64c385313bbb',
      date: 'February 20',
      type: 'Income',
      amount: '13.50',
      description: 'payment',
      accountName: 'Personal Loan Account',
      user: 'user123'
    }
  },
  {
    id: '6a04ede8-f4c5-45e0-b3cb-bb628bf118a3',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '33dcd91d-7aa7-4ed5-a0fd-5df36ac458d5',
      date: 'February 5',
      type: 'Outcome',
      amount: '90.95',
      description: 'deposit',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'aeb22a33-9603-4513-b62b-f562ec21395a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '43d66abd-0312-4687-903c-1b472e6ff647',
      date: 'February 8',
      type: 'Outcome',
      amount: '18.86',
      description: 'withdrawal',
      accountName: 'Checking Account',
      user: 'user123'
    }
  },
  {
    id: '78888b49-b6f7-4fff-bf54-dc263e9d67fb',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '6f8a43c5-bcba-4132-b53f-489b3bee9afa',
      date: 'February 5',
      type: 'Outcome',
      amount: '71.73',
      description: 'invoice',
      accountName: 'Auto Loan Account',
      user: 'user123'
    }
  },
  {
    id: '04347163-759d-446d-81e9-a496effc4343',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'aca58dd8-8d03-4f3b-bead-6251485f9d21',
      date: 'January 29',
      type: 'Outcome',
      amount: '42.72',
      description: 'invoice',
      accountName: 'Investment Account',
      user: 'user123'
    }
  },
  {
    id: 'd78482e7-c702-443c-b14c-f05442f62e18',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: 'b1903b4a-2631-4fea-a833-6033b224465c',
      date: 'January 22',
      type: 'Income',
      amount: '44.38',
      description: 'deposit',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: '33ed101a-08e4-4823-8f79-8ba0a815ac25',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '44a74590-8c96-4b1b-818e-d0e635ee43a2',
      date: 'January 12',
      type: 'Outcome',
      amount: '17.13',
      description: 'deposit',
      accountName: 'Money Market Account',
      user: 'user123'
    }
  },
  {
    id: '9a2bc068-895b-4a7b-ac45-fb07fd00626b',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '9537f422-7bad-4f1c-9674-1944d24912df',
      date: 'January 2',
      type: 'Income',
      amount: '92.66',
      description: 'payment',
      accountName: 'Money Market Account',
      user: 'user123'
    }
  },
  {
    id: '34c94769-9743-4ccf-9f5d-a4b4ce8a363a',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '57fee8ca-c5af-48d1-a636-9f7abd1d269e',
      date: 'January 14',
      type: 'Income',
      amount: '11.60',
      description: 'withdrawal',
      accountName: 'Savings Account',
      user: 'user123'
    }
  },
  {
    id: '3e11793a-088b-4d2f-82f4-fe925b50bdbe',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '1670ce55-2d24-4d4c-9784-4d32f5713cf7',
      date: 'February 24',
      type: 'Outcome',
      amount: '42.30',
      description: 'withdrawal',
      accountName: 'Home Loan Account',
      user: 'user123'
    }
  },
  {
    id: 'dda086a4-1b9d-456c-b2e9-5ffd1faf57df',
    status: 'success',
    message: 'Gasto registrado exitosamente',
    data: {
      expenseId: '5857e020-a824-4fc0-91a5-2b3b7f57d740',
      date: 'February 4',
      type: 'Outcome',
      amount: '58.99',
      description: 'payment',
      accountName: 'Money Market Account',
      user: 'user123'
    }
  }
]

'use client'
import Button from '@/components/common/Button'
import InputNormal from '@/components/common/InputNormal'
import InputNumber from '@/components/common/InputNumber'
import TableData from '@/components/common/TableData'
import { ColumnDef } from '@tanstack/react-table'
import { SubmitHandler, useForm } from 'react-hook-form'
interface Person {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
}

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name'
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name'
  },
  {
    accessorKey: 'age',
    header: 'Age'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  }
]

const data: Person[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    email: 'jane@example.com'
  }
  // Add more data as needed
]
export default function Home() {
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <InputNormal placeholder='enter input normal' {...register('email')} autoComplete='' />
        <InputNormal placeholder='enter input password' {...register('password')} type='password' autoComplete='off' />
      </form>
    </div>
  )
}

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/kit/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/ui/kit/input'

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email обязателен' })
    .email('Неверный email'),
  password: z
    .string({
      required_error: 'Пароль обязателен',
    })
    .min(6, 'Пароль должен быть не менее 6 символов'),
})

const LoginForm = () => {
  const form = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = form.handleSubmit((data) => console.log(data))

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default LoginForm

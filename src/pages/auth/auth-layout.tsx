import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/kit/card'

interface AuthLayoutProps {
  title: string
  form: React.ReactNode
  description: React.ReactNode
  footerContent: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  footerContent,
  form,
  description,
  title,
}) => {
  return (
    <main className="grow flex flex-col items-center pt-[200px] justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground [&_a]:underline [&_a]:text-primary">
            {footerContent}
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}

export default AuthLayout

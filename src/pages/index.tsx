import { Inter } from 'next/font/google'
import { t } from 'i18next'
import { Button } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      something
      {t("test")}

      <Button type="primary">Button</Button>
    </main>
  )
}

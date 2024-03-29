'use client'

import Link from 'next/link'

const Page = () => {
  return (
    <section>
      <h2>確認ページ</h2>
      <div className={'mt-4'}>
        <Link href="/">
          戻る
        </Link>
      </div>
    </section>
  )
}

export default Page
import Link from 'next/link'

type Person = {
  name: string
  age: number
}

type Person2 = {
  splitName: string
  splitAge: number
}

type Person3 = {
  name: string
  age: number
  address: string
}

const Page = () => {
  // オブジェクトの省略記法
  let name = '金'
  let age = 20

  let person: Person = {
    name,
    age
  }

  // テンプレート文字列
  const personTemplateName = `お名前: ${person.name}`
  const personTemplateAge = `年齢: ${person.age}`

  // 分割代入
  const person2: Person2 = {
    splitName: '小林',
    splitAge: 30
  }
  const { splitName, splitAge } = person2
  const nameList = ['鈴木', '山田', '小林', '山﨑']
  const [name1,name2] = nameList

  // スプレッド構文
  const person3: Person = { name: '山田', age: 35 }
  const spreadPerson = {...person3}
  const spreadPerson2: Person3 = {...person, address: '東京都新宿区新宿'}
  const spreadPerson3: Person3 = {...person, name: '鈴木', address: '大阪市北区'}

  // 値渡し, 参照渡し
  const person4 = person3
  person4.name = '山田2'

  return (
    <>
      <header className={'text-center p-8'}>
        <h2 className={'font-bold text-xl text-red-600'}>申込フォーム</h2>
      </header>

      <main className={'p-8'}>
        <div>・オブジェクト省略記法</div>
        <div>
          お名前: {person.name}
        </div>
        <div className={'mb-4'}>
          年齢: {person.age}
        </div>

        <div>・テンプレート文字列</div>
        <div>
          {personTemplateName}
        </div>
        <div className={'mb-4'}>
          {personTemplateAge}
        </div>

        <div>・分割代入1</div>
        <div>
          お名前: {splitName}
        </div>
        <div className={'mb-4'}>
          年齢: {splitAge}
        </div>

        <div>・分割代入2</div>
        <div className={'mb-4'}>
          お名前: {name1}, {name2}
        </div>

        <div>・スプレッド構文1</div>
        <div>
          お名前: {spreadPerson.name}
        </div>
        <div className={'mb-4'}>
          年齢: {spreadPerson.age}
        </div>

        <div>・スプレッド構文2</div>
        <div>
          お名前: {spreadPerson2.name}
        </div>
        <div>
          年齢: {spreadPerson2.age}
        </div>
        <div className={'mb-4'}>
          住所: {spreadPerson2.address}
        </div>

        <div>・スプレッド構文3</div>
        <div>
          お名前: {spreadPerson3.name}
        </div>
        <div>
          年齢: {spreadPerson3.age}
        </div>
        <div className={'mb-4'}>
          住所: {spreadPerson3.address}
        </div>

        <div>・値渡し、参照渡し1</div>
        <div>
          person3とspreadPersonは同一であるか: {person3 == spreadPerson ? 'true' : 'false'}
        </div>
        <div className={'mb-4'}>
          person3とperson4は同一であるか: {person3 == person4 ? 'true' : 'false'}
        </div>

        <div>・値渡し、参照渡し2</div>
        <div>
          お名前(person3): {person3.name}
        </div>
        <div>
          お名前(person4): {person4.name}
        </div>
        <div>
          年齢(person3): {person3.age}
        </div>
        <div className={'mb-4'}>
          年齢(person3): {person4.age}
        </div>
      </main>
      <footer className={'mt-4 text-center'}>
        <Link href="/confirm">
          確認ページへ
        </Link>
      </footer>
    </>
  )
}

export default Page
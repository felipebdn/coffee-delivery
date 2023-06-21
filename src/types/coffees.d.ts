type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
}
type Maybe<T> = T | null

type Asset = Node & {
  id: Scalars['ID']['output']
  url: Scalars['String']['output']
}

export type TypeCoffees = Node & {
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  typeName?: Maybe<Scalars['String']['output']>
}

export type Coffees = Node & {
  coffeeImage?: Maybe<Asset>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  price?: Maybe<Scalars['Float']['output']>
  typeCoffeesPlural: Array<TypeCoffees>
}

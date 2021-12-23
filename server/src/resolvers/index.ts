import UserResolver from "./users"

type NonEmptyArray<TItem> = readonly [TItem, ...TItem[]] | [TItem, ...TItem[]]

const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [UserResolver]

export default resolvers

const { gql } = require('apollo-server-express')

const schema = gql`
union searchresult = VS|RV
enum type{
    vs
    rv
}
type Query{
result(type:type!,word:String,category:String,mandal:Int):[searchresult!]
}

input VSInput{
    word:String,
    category:String
}

type VS{
    id:ID,
    word:String!,
    nagari:String!,
    description:String!,
    category:String!
}

type RV{
    mandal:Int!,
    sukta:Int!,
    sungby:String!,
    sungbycategory: String!,
    sungfor: String!,
    sungforcategory:String!,
    meter: String!
}

`

module.exports = { schema }

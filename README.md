## 背景

ブラウザから newsAPI を使用したところ、無料枠では禁止されていた
そこで Node で newsAPI を叩く API を立てることにした

## デプロイ先(Heroku)

https://quiet-ocean-29539.herokuapp.com/

## フロント側の実装

https://github.com/0sa0sa/newsAPI

## 注意事項

CORS の制限をしていないので、どこからでも叩けてしまうが、
不正アクセスがあっても、newsAPI のリクエスト制限には引っかかるので許容とする

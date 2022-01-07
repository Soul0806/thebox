import sys

from PyPtt import PTT
ptt_bot = PTT.API()
ptt_id = 'chin2049'
password = '19813031'

try:
    ptt_bot.login(ptt_id, password)
except PTT.exceptions.LoginError:
    ptt_bot.log('登入失敗')
    sys.exit()
except PTT.exceptions.WrongIDorPassword:
    ptt_bot.log('帳號密碼錯誤')
    sys.exit()
except PTT.exceptions.LoginTooOften:
    ptt_bot.log('請稍等一下再登入')
    sys.exit()

ptt_bot.log('登入成功')

board = 'Gossiping'

index = ptt_bot.get_newest_index(
    PTT.data_type.index_type.BBS,
    board=board
)

q = 5
posts = []
for i in range(q):
    posts.append(ptt_bot.get_post(
    board,
    post_index=index))
    index -= 1

for article in posts:
    print(article.title)

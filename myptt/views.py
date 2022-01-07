from django.http.response import HttpResponse
import sys
from django.shortcuts import render
from PyPtt import PTT

ptt_id = 'chin2049 '
password = '19813031'
board = 'Gossiping'


# Create your views here.

def index(request):
    ptt_bot = PTT.API()
    ptt_bot.login(ptt_id, password)
    num = int(request.GET['quantity'])
    posts = []
    index = get_index(ptt_bot)
    ptt_time = ptt_bot.get_time()
    for i in range(num):
        posts.append(ptt_bot.get_post(
            board,
            post_index=index))
        index -= 1
    ptt_bot.logout()
    return render(request, 'myptt/index.html', {
        "ptt": ptt_bot,
        "posts": posts,
        "time": ptt_time
    })


def get_index(ptt_bot):
    index = ptt_bot.get_newest_index(
        PTT.data_type.index_type.BBS,
        board=board
    )
    return index

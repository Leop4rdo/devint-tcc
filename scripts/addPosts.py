import sys
import requests
import random
import string



API_URL = 'http://localhost:8080/api/v1'

def auth() :

    res = requests.post(f'{API_URL}/auth', json = {
        'email' : 'leonardoantunes1401@gmail.com',
        'password' : 'tccdst'
    })

    return res.json()['data']['token']

    pass

def createPost(token, index) :

    letters = string.ascii_lowercase
    random_content = 'post nº' + str(index) + ' - ' + ''.join(random.choice(letters) for i in range(0, 50))
    
    res = requests.post(f'{API_URL}/posts', json = {
        'content' : random_content
        }, headers = { 'Authorization' : f'Bearer {token}' })

    print(f'has error : {res.json()["hasError"]}')
    pass

def run() :
    token = auth()

 
    for i in range(0, 101) :
        print(f'creating post {i}/100')
        createPost(token, i)
        pass   
    pass

run()

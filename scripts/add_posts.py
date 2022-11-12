import sys
import requests
import random
import string



API_URL = 'http://localhost:8080/api/v1'

def auth() :
    res = requests.post(f'{API_URL}/auth', json = {
        'email' : sys.argv[1],
        'password' : sys.argv[0]
    })

    if res.status_code != 200:
        print('Forbidden access to API')
        sys.exit()

    return res.json()['data']['token']

def create_post(token, index) :

    letters = string.ascii_lowercase
    random_content = 'post nº' + str(index) + ' - ' + ''.join(random.choice(letters) for i in range(0, 50))
    
    res = requests.post(f'{API_URL}/posts', json = {
        'content' : random_content
        }, headers = { 'Authorization' : f'Bearer {token}' })

    print(f'has error : {res.json()["hasError"]}')
    pass

def run() :
    if (len(sys.argv) < 3) :
        print('user and password must be provided in order!')
        sys.exit()

    token = auth()

    for i in range(0, 101) :
        print(f'creating post {i}/100')
        create_post(token, i)
        pass   
    pass

run()

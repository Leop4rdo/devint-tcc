import sys
import requests

API_URL = 'http://localhost:8080/api/v1'
SENIORITIES_TO_CREATE = [
    'Estudante',
    'Junior',
    'Pleno',
    'Senior',
]


def auth() :
    res = requests.post(f'{API_URL}/auth', json = {
        'email' : sys.argv[1],
        'password' : sys.argv[2]
    })

    if res.status_code != 200:
        print('Forbidden access to API')
        sys.exit()

    return res.json()['data']['token']

def get_existing(token) :
    res = requests.get(
        f'{API_URL}/seniorities',  
        headers = { 'Authorization' : f'Bearer {token}' } 
    )

    return res.json()['data']

def check_existence(target, existing):
    for i in existing:
        if target == i['name']:
            return True

    return False

def create(name, token):
    body = {
        "name" : name
    }

    requests.post(
        f'{API_URL}/seniorities',
        json=body,
        headers={ 'Authorization' : f'Bearer {token}' }
    )

def run() :
    if (len(sys.argv) < 3) :
        print('user and password must be provided in order!')
        return None

    token = auth()

    existing = get_existing(token)

    print('-------------------------')
    print('')
    print(f'new_skills -> {len(SENIORITIES_TO_CREATE)}')
    print(f'existing_skills -> {len(existing)}')
    print('')
    print('-------------------------')
    print('')

    for s in SENIORITIES_TO_CREATE:
        if check_existence(s, existing):
            continue

        create(s, token)
        print(f'seniority created -> {s}')
    print('')
    print('-------------------------')
    
run()
    
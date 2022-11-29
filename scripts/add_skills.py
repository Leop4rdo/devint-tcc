import sys
import requests


API_URL = 'https://devint-api.azurewebsites.net'
DEVICON_URL = 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons' # /name/name-svgname.svg


def auth() :
    res = requests.post(f'{API_URL}/auth', json = {
        'email' : sys.argv[1],
        'password' : sys.argv[0]
    })

    if res.status_code != 200:
        print('Forbidden access to API')
        sys.exit()

    return res.json()['data']['token']

def get_existing_skills(token) :
    res = requests.get(f'{API_URL}/skills', headers = { 'Authorization' : f'Bearer {token}' } )

    return res.json()['data']

def get_sew_skills() :
    res = requests.get(f'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.json')

    return res.json()

def skill_already_exists(target_skill, existing_skills) :
    for s in existing_skills:
        if target_skill['name'] == s['name'] : 
            return True

def create_skill(skill, token):
    body = {
        "name" : skill['name'],
        "icon" : f'{DEVICON_URL}/{skill["name"]}/{skill["name"]}-original.svg'
    }
    
    requests.post(
            f'{API_URL}/skills', 
            json = body,
            headers = { 'Authorization' : f'Bearer {token}' }
    )


def run() : 
    if (len(sys.argv) < 3) :
        print('user and password must be provided in order!')
        sys.exit()

    token = auth()

    existing_skills = get_existing_skills(token)
    new_skills = get_sew_skills()

    print('-------------------------')
    print('')
    print(f'new_skills -> {len(new_skills)}')
    print(f'existing_skills -> {len(existing_skills)}')
    print('')
    print('-------------------------')
    print('')


    for skill in new_skills:
        if (skill_already_exists(skill, existing_skills)) : 
            continue

        create_skill(skill, token)
        print(f'skill created -> {skill["name"]}')
    print('')
    print('-------------------------')

run()

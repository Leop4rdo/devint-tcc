import sys
import requests


API_URL = 'http://localhost:8080/api/v1'
DEVICON_URL = 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons' # /name/name-svgname.svg


def auth() :
    res = requests.post(f'{API_URL}/auth', json = {
        'email' : 'leonardoantunes1401@gmail.com',
        'password' : 'tccdst'
    })

    return res.json()['data']['token']

def getExistingSkills(token) :
    res = requests.get(f'{API_URL}/skills', headers = { 'Authorization' : f'Bearer {token}' } )

    return res.json()['data']

def getNewSkills() :
    res = requests.get(f'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.json')

    return res.json()

def skillAlreadyExists(target_skill, existing_skills) :
    for s in existing_skills:
        if target_skill['name'] == s['name'] : 
            return True

def createSkill(skill, token):
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
    token = auth()

    existing_skills = getExistingSkills(token)
    new_skills = getNewSkills()

    print('-------------------------')
    print('')
    print(f'new_skills -> {len(new_skills)}')
    print(f'existing_skills -> {len(existing_skills)}')
    print('')
    print('-------------------------')

    for skill in new_skills:
        if (skillAlreadyExists(skill, existing_skills)) : 
            continue

        createSkill(skill, token)
        print(f'skill created -> {skill["name"]}')
run()

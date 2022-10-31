import sys
import requests


API_URL = 'http://localhost:8080/api/v1'
DEVICON_URL = 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/' # /name/name-svgname.svg


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

def run() : 
    token = auth()

    existing_skills = getExistingSkills(token)
    new_skills = getNewSkills()

    print(new_skills[0]['name'])

    for skill in new_skills:
        print(skill[0]['name'])
        pass
        # print(f'skill : {skill['name']}')
        # if skillAlreadyExists(skill, existing_skills):
        #     print('already exists! :)')
        


run()
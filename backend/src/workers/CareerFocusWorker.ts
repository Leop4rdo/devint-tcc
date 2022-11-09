import CareerRepository from "@repositories/CareerRepository"
import CareerFocus from "@src/core/domain/CareerFocus"

const CAREER_FOCUS_LIST = [
    'Back-end',
    'Front-End',
    'Mobile',
    'Dev Ops',
    'DBA',
    'Scrum Master',
    'Tech Lead',
    'Software Engineer',
    'Software Architect',
    'Dev'
]

export const setup = async() => {
    console.log('[INFO] Career Focus worker is running')

    const repo = new CareerRepository()

    for (const c of CAREER_FOCUS_LIST) {
        if (await repo.findBy('name', c))
            continue
        
        console.log(`[INFO] creating ${c}`)
        repo.create(new CareerFocus({ name : c }))
    }

    console.log('[INFO] finished running Career Focus worker')
}
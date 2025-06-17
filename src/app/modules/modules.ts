

export interface User {
    id?: number
    name: string
    email: string

}
export interface Project {


    // @OneToMany
    // private List<User> userList;

    id?: number
    title: string
    description: string
    endDate: Date
    startDate: Date
    userList: User[]


}
export interface Task {

    id?: number
    title: string
    description: string
    status: Status
    assignedTo: User
    project: Project
}
export enum Status {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
    , DEFAULT = 'DEFAULT'

}